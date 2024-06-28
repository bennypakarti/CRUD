const express = require("express");
const router = express.Router();
const Agent = require("../model/Hero.model");

router.get("/", (request, response) => {
  Agent.getAgent(response);
});

router.get("/:id", (request, response) => {
  const id = request.params.id;
  Agent.getAgentById(id, response);
});

router.post("/update", (request, response) => {
  const data = {
    "id": request.body.id,
    "name": request.body.name,
    "role": request.body.role
  }
  Agent.updateAgentById(data, response);
});

router.post('/add', (request, response) => {
    const data = {
        "name": request.body.name,
        "role": request.body.role
    }
    Agent.addAgent(data, response)
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Agent.removeAgent(id, response)
})

module.exports = router;
