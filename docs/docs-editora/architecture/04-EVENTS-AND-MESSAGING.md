# Eventos e Mensageria

Eventos:
- UserRegistered
- EmailVerified
- WriterActivationRequested
- WriterActivated
- BookCreated
- ManuscriptUploaded
- BookValidated
- BookSubmitted
- BookApproved
- BookPublished
- OrderCreated
- PaymentSucceeded
- PaymentFailed
- PrintJobCreated
- PrintJobCompleted
- ShipmentCreated
- ShipmentDelivered
- RoyaltyGenerated
- WithdrawalRequested

RabbitMQ será utilizado para processos assíncronos. Consumidores devem ser idempotentes e possuir retry/dead-letter queue.
