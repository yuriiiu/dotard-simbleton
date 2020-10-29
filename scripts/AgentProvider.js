import {useBusinesses} from "./BusinessProvider.js"


const businessArray = useBusinesses()

const agentArray = businessArray.map(business => ({
    
    fullName: business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast,
    company: business.companyName,
    phoneNumber: business.phoneWork

}))

export const useAgents = () => {
    return agentArray
}