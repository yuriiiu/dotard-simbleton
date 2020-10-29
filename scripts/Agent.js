export const Agent = (agentObj) => {
    return `
        <section class="agent">
            <h2 class="agent__name">${agentObj.fullName}</h2>
            <div class="agent__info">
                ${agentObj.company} <br>
                ${agentObj.phoneNumber}
            </div>
        </section>
    `
}