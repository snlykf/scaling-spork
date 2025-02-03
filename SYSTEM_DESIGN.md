# System Design Interview

```mermaid
sequenceDiagram
    User->>+Website: Request Invoice PDF
    Website->>+PdfService: Get PDF
    PdfService-->>Website: PDF
    Website->>+EmailService: Send PDF via mail
    EmailService-->>Website: Mail queued
    Website-->>User: Result
```