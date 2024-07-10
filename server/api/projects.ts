export default defineEventHandler((event) => {
    const p: string = `[
    {
      "id": 1,
      "name": "NovaSpark",
      "description": "Brief description of Project 1.",
      "longDes": "Detailed description of Project 1.",
      "leader": 1,
      "role": "some role"
    },
    {
      "id": 2,
      "name": "AetherWave",
      "description": "Brief description of Project 2.",
      "longDes": "Detailed description of Project 2.",
      "leader": 2,
      "role": "role"
    },
    {
      "id": 3,
      "name": "QuantumHorizon",
      "description": "Brief description of Project 3.",
      "longDes": "Detailed description of Project 3."
    },
    {
      "id": 4,
      "name": "SolsticeForge",
      "description": "Brief description of Project 4.",
      "longDes": "Detailed description of Project 4."
    },
    {
      "id": 5,
      "name": "NebulaPulse",
      "description": "Brief description of Project 5.",
      "longDes": "Detailed description of Project 5."
    }
  ]`;
    return {
        projects: p
    }
})