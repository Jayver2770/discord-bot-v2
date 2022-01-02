import { Client } from "discord.js";

export default (client: Client) => {
    const statusOptions = ['Josh Bot | !help', 'You are a great person', 'Does anyone need to learn their left and right?', 'New Commands Semi-Weekly', 'Bot Dashboard Coming in the Future']
    let counter = 0

    const updateStatus = () => {
        client.user?.setPresence ({
            status: 'dnd',
            activities: [
                {
                    name: statusOptions[counter]
                },
            ],
        })

        if(++counter >= statusOptions.length) {
            counter = 0
        }

        setTimeout(updateStatus, 1000 * 60 * 2)
    }
    updateStatus()
}

export const config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'Status Changer'
}