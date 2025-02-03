import * as userRepo from '../repos/userRepo.js';
import * as billingRepo from '../repos/billingRepo.js';
import * as pdfService from '../functions/pdfService.js';

export function getPlans(req, res) {
    billingRepo.getPlans().then(plans => {
        res.json(plans);
    });    
}

export function createInvoice(req, res) {
    const username = req.params.username;

    userRepo
        .getLoginUser(username)
        .then(user => billingRepo.getInvoice(user))
        .then(invoice => res.json(invoice))
        .catch(err => res.json(err));
}

export async function createInvoicePdf(req, res) {
    const username = req.params.username;

    const user = await userRepo.getLoginUser(username);
    const invoice = await billingRepo.getInvoice(user);
    const pdf = await pdfService.generatePdf(invoice);

    res.setHeader('Content-type', "application/octet-stream");
    res.setHeader('Content-disposition', 'attachment; filename=invoice.pdf');

    res.send(Buffer.from(pdf));
}