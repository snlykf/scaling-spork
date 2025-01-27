const mockPlans = [
    'Free',
    'Pro',
    'Enterprise'
];

export function getPlans(req, res) {
    res.json(mockPlans);
}