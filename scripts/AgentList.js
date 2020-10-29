import {useAgents} from "./AgentProvider.js"
import {Agent} from "./Agent.js"

const agentTarget = document.querySelector(".agents")

export const AgentList = () => {
    const agentArray = useAgents()
    agentTarget.innerHTML = "<h1>Purchasing Agents</h1>"
    
    agentArray.forEach(
        (agentObj) => {
            agentTarget.innerHTML += Agent(agentObj)
        }
    );

    return agentTarget
}
