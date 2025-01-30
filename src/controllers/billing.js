import * as userRepo from '../repos/userRepo.js';
import * as billingRepo from '../repos/billingRepo.js';

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