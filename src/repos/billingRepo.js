const mockPlans = [
    'Free',
    'Pro',
    'Enterprise'
];

const getPlans = () => Promise.resolve(mockPlans);

export {
    getPlans
};