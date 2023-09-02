import { Interpreter } from "../../core"
import { EventHandler } from "../../structures"

export default new EventHandler(
    {
        name: "roleDelete",
        version: "1.0.1",
        listener: async function(old) {
            const commands = this.commands.get("roleDelete")
    
            for (const command of commands) {
                Interpreter.run({
                    obj: old,
                    command,
                    client: this,
                    states: {
                        role: {
                            old,
                            new: old
                        }
                    },
                    data: command.compiled.code,
                    args: []
                })
            }
        },
        description: "This event is fired when a role is deleted",
        intents: [
            "Guilds"
        ]
    }
)