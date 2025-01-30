import * as auth from '../controllers/authentication.js';
import * as healthCtl from '../controllers/healthController.js';
import * as billingCtrl from '../controllers/billing.js';

export default function (app) {
    // ==============
    // health
    // ==============
    app.get('/health/readiness', healthCtl.health);
    app.get('/health/liveness', healthCtl.health);
    
    // ==============
    // auth
    // ==============
    app.post('/api/authentication', auth.check);  

    // ==============
    // billing
    // ==============
    app.get('/api/billing/plans', billingCtrl.getPlans);
    app.get('/api/billing/:username/invoice', billingCtrl.createInvoice);
}
