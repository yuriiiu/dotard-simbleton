import {useBusinesses} from "./BusinessProvider.js"
import {Business} from "./Business.js"

const mTarget = document.querySelector(".businessList--manufacturing")



export const mList = () => {
    const businessArray = useBusinesses()
    const manufacturingArray = businessArray.filter(business => business.companyIndustry === 'Manufacturing')
 

    mTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"
    

    manufacturingArray.forEach(
        (businessObject) => {
            mTarget.innerHTML += Business(businessObject)
        }
    );

    return mTarget
}