const cds = require('@sap/cds');
const ui5Proxy = require('@sap-ux/ui5-proxy-middleware').ui5Proxy;

cds.on('bootstrap', (app) => {
    app.post("/event-registration/logout", (req, res) => {
        // Send 401 Unauthorized to tell the browser to forget the credentials.
        // NOTE: while this works for the sample app, it is not double-checked for 100% security! 
        res.status(401);
        res.send();
    });

    app.get('/resources/*', ui5Proxy({
        path: [
            '/resources', '/test-resources'
        ],
        url: 'https://ui5.sap.com',
        version: '1.97.0'
    }));
});

// Delegate bootstrapping to built-in server.js of CDS
module.exports = cds.server