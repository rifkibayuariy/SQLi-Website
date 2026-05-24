# SQLi Detection

<div align="center">

Modern AI-Powered SQL Injection Detection Platform

Built with Next.js, FastAPI, Hugging Face Spaces, and Machine Learning

</div>

---

## Overview

SQLi Detection is a modern web platform designed to demonstrate how Machine Learning can detect SQL Injection payloads in real time.

This project focuses on:

- Real-world SQL Injection simulation
- AI-powered payload detection
- Interactive API playground
- Secure feedback validation demo
- Modern cybersecurity-themed interface

The Machine Learning model is deployed on Hugging Face Spaces and accessed directly through API requests from the frontend application.

---

## Features

### AI SQL Injection Detection

Analyze suspicious text input using a trained Machine Learning model capable of identifying SQL Injection patterns.

---

### Real-World Feedback Simulation

Simulate a real feedback form where:

- Normal feedback is accepted
- Malicious SQL Injection payloads are detected and blocked

---

### Interactive API Playground

Directly send payloads to the deployed Hugging Face API and view prediction results instantly.

---

### Modern Cybersecurity UI

Designed with:

- Glassmorphism interface
- Purple cybersecurity aesthetic
- Responsive layout
- Smooth interactions
- Developer-focused visuals

---

# Machine Learning API

This project uses an external Machine Learning API deployed on Hugging Face Spaces.

## API Endpoint

```bash
https://rifkibayuariyan-sqli-detection-api.hf.space/api/scan
```

---

## API Documentation

```bash
https://rifkibayuariyan-sqli-detection-api.hf.space/docs
```

---

## MLflow Tracking

Model tracking and versioning are managed using DagsHub MLflow.

### DagsHub Repository
https://dagshub.com/rifkibayuariy/sqli-detection


---

# Tech Stack

## Frontend

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Backend & Machine Learning

- FastAPI
- Scikit-learn
- MLflow
- Hugging Face Spaces
- DagsHub

---

# API Usage

## Request

### Endpoint

```http
POST /api/scan
```

### Content-Type

```http
application/json
```

### Body

```json
{
  "query_text": "' OR 1=1 --"
}
```

---

## Example Response

```json
{
  "input": "' OR 1=1 --",
  "cleaned_input": "' or 1 = 1 --",
  "is_sqli": true
}
```

---

# Using The API

You do not need to install the Machine Learning model locally.

The frontend directly communicates with the deployed Hugging Face API.

Example fetch request:

```ts
const response = await fetch(
  "https://rifkibayuariyan-sqli-detection-api.hf.space/api/scan",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query_text: "' OR 1=1 --",
    }),
  },
);

const data = await response.json();

console.log(data);
```

---

# Example Payloads

## Malicious Payload

```sql
' OR 1=1 --
```

Expected result:

```json
{
  "is_sqli": true
}
```

---

## Safe Input

```text
Website ini sangat membantu
```

Expected result:

```json
{
  "is_sqli": false
}
```

---

# Use Cases

This project can be used for:

- Academic demonstrations
- Cybersecurity learning
- AI security showcase
- SQL Injection awareness
- Machine Learning projects
- Secure form validation simulation

---

# Security Disclaimer

This project is intended for:

- Educational purposes
- Demonstration environments
- Security awareness
- Research and experimentation

This application is not intended to replace enterprise-grade Web Application Firewalls (WAF) or production security systems.

---

# Future Improvements

- Threat analytics dashboard
- Detection confidence score
- Payload history
- Authentication system
- Dataset visualization
- Multi-model comparison
- Admin monitoring panel

---

# Author

## Rifki Bayu Arianto

Web Developer