import * as billingRepo from '../repos/billingRepo.js';

export function getPlans(req, res) {
    res.json(billingRepo.getPlans());
}
