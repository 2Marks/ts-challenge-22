<a name="readme-top"></a>
<!-- GETTING STARTED -->
## Getting Started

TS challenge

### Prerequisites

Please ensure you have node and npm install on your machine
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/2Marks/ts-challenge-22.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

Each file in src/assessments has each challenge implemented.

### First Assessment
The first assessment implements the `GET` episode API functionality. Please use the script below to run:
```sh
npm run dev:first:assessment
```

### Second Assessment
The second assessment implements the counter functionality. Please use the script below to run:
```sh
npm run dev:second:assessment
```
```sh
to run test: npm test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Services Interaction -->
## Services Interaction

## HTTP protocol
For services to communicate with one another, we can achieve this via REST using the HTTP protocol. 
To ensure a secure connection, we can have a service secret key only known to the services that gets sent on every http request as part of the request headers. Each service then only processes the request if the key passed is a valid one, otherwise it gets dropped.

### Pros
1. Easier to implement
2. It's a fairly known protocol so it has a shallow learning curve.

### Cons
1. It would not play really well in an event driven architecture implementation
2. Might not be the best option if speed is of utmost importance

### Best cases
Using HTTP rest protocol approach would meet the requirements for most service-to-service communication today, where latency is not a super huge concern

## GRPC
GRPC is another performant protocol specifically built and optimised to improve service to service communication experience.

### Pros
1. Has security built in out of the box.
2. It has low latency and it's a lot faster compared to HTTP protocol
3. Data is transferred as protocol buffers so the transfer size is quite small even for large data transfers as compared to JSON with REST.

### Cons
1. Has a steep learning curve

### Best cases
perfect fit for service to service communication. Can be used for production level services.


## Event Driven System
Services can also communicate with one another using the publish/subscriber pattern.Services would publish actions as messages to a message queue and have the other service act as the consumer which listens to the queue and process message accordingly

### Pros
1. Improved system design as services are not tightly coupled to one another
2. Increase performance as services do not wait for messages to be completed.
Has an auto retry system that caters for messages not successfully processed.

### Cons
1. Requires advanced know-how on event driven design and architecture
2. Can be increasingly complex to implement and maintain for a small team
3. Introduces new dependencies to the system which would need to be managed. E.g the queuing system (rabbitmq)

### Best cases
works best in event driven systems.


<!-- Database structure -->
## Database structure
Please find below ERD for the proposed database structure.
![ERD](https://github.com/2Marks/ts-challenge-22/blob/main/erd.png?raw=true)

Thanks.
<p align="right">(<a href="#readme-top">back to top</a>)</p>