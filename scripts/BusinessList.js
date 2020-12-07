import {useBusinesses} from "./BusinessProvider.js"
import {findAgent} from "./BusinessProvider.js"
import {Business} from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    const businessArray = useBusinesses()
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );



    return contentTarget
}

const companySearchResultArticle = document.querySelector(".foundAgent")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const foundAgent = findAgent(keyPressEvent.target.value)

            foundAgent.forEach(agent => {
                companySearchResultArticle.innerHTML += `
                    <h2>
                    ${agent.companyName}
                    </h2>
                    <section>
                    ${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}
                    </section>
                    <section>
                    ${agent.addressFullStreet}
                    </section>
                    <section>
                    ${agent.addressCity},
                    ${agent.addressStateCode}
                    ${agent.addressZipCode}
                    </section>
                `;
            })
        }
    });