# Documentation to push to AWS server
From dev environemt to production
# 1. API (Laravel)
o Production: we can host on EC2
o Alternative serverless API: AWS Lambda can use with Bref (to run
PHP on Lambda) + API Gateway
we are have developed following endpoint with laravel
- http://192.168.1.143:8000/api/products

# 2. Database
o RDS (MySQL or PostgreSQL) for production, for a small projects, we
can go with a single AZ instance.
# 3. Product images / assets
o Store on S3 with a public read policy (or signed URLs). Use
CloudFront CDN for global delivery.
# 4. Authentication & Security
o Use IAM roles attached to EC2 instances or Lambda to allow S3 and
RDS access.
o Use HTTPS with certificates from AWS Certificate Manager (ACM)
and CloudFront / ALB.
# 5. Deployment
o CI/CD: GitHub Actions → deploy to Elastic Beanstalk
# 6. Example flow for image upload
o Backend generates a pre-signed S3 PUT URL: client requests
/api/uploads/presign → backend calls S3 SDK to create presigned
URL → client uploads file directly to S3 → server stores returned S3
path in product_img.
# 7. Costs: 
RDS and EC2 cost money. For testing, we can use free-tier small EC2
and S3.

