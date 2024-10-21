export interface investment {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration:   number;
}

export interface investmentOutput{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}