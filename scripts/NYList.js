import {useBusinesses} from "./BusinessProvider.js"
import {Business} from "./Business.js"

const nyTarget = document.querySelector(".businessList--newYork")



export const NYList = () => {
    const businessArray = useBusinesses()
    const NYArray = businessArray.filter(business => business.addressStateCode === 'NY')
 

    nyTarget.innerHTML = "<h1>New York Businesses</h1>"
    

    NYArray.forEach(
        (businessObject) => {
            nyTarget.innerHTML += Business(businessObject)
        }
    );

    return nyTarget
}