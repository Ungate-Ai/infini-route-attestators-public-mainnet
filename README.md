# Steps to run the project:

1. Rename file .env.example to .env

2. Run "docker compose up"

# Ungate AVS Operator Project 

## ▶️ Run the demo
We provide a sample docker-compose configuration which sets up the Attestor Nodes

To set up the environment, create a `.env` file with the usual Ungate
configurations (see the `.env.example`), then run:

```console
docker-compose up
```

> [!NOTE]
> This might take a few minutes when building the images


## 🏗️ Architecture
The Ungate Attester nodes communicate with an AVS WebAPI endpoint which
validates tasks on behalf of the nodes. The attesters then sign the tasks based
on the AVS WebAPI response.

Attester nodes all communicate with a centralized endpoint.

### AVS WebAPI
```
POST task/validate returns (bool) {"proofOfTask": "{proofOfTask}"};
```
Executing a task
To execute a task we send a POST request to the Task Performer service:
curl -X POST http://localhost:4003/task/execute
