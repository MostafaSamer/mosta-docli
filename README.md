## To Run Project
- clone Project
- install dependencies `yarn install`
- run project `yarn dev`

## Add Command
You can easliy add command by creating a json file in `pages/api/commands` with same format
```
{
    "name": "Docker Container Stop Server",
    "description": "Stop one or more running containers",
    "categories": ["db", "backup", "api", "ruby"],
    "namespace": "webops-docker",
    "commands": [
        {
            "command": "docker",
            "description": "Service Name"
        },
        {
            "command": "container",
            "description": "Target Container in docker service"
        },
        {
            "command": "stop",
            "description": "Remove directories and their contents recursively."
        },
        {
            "command": "[OPTIONS]",
            "description": "--time , -t 10 Seconds to wait for stop before killing it"
        },
        {
            "command": "CONTAINER",
            "description": "Target Container want to stop"
        }
    ]
}
```
