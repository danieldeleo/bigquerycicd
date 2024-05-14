# Overview

...


# Usage Prerequisites

## Create Cloud Storage Bucket for Terraform State
We assume that you have already set up the Cloud Storage bucket you intend to use as
Terraform state backend, and we assume that IAM has been configured appropriately for
Terraform state and for BigQuery usage.

## Connect Your GitHub Repository to Cloud Build and Create a Trigger

1. Create a Cloud Build Repository 2nd Gen Connection [(details)](https://cloud.google.com/build/docs/automating-builds/github/connect-repo-github?generation=2nd-gen#connecting_a_github_host).
1. Link your GitHub repository to Cloud Build [(details)](https://cloud.google.com/build/docs/automating-builds/github/connect-repo-github?generation=2nd-gen#connecting_a_github_repository_2).
1. Create a Cloud Build trigger [(details)](https://cloud.google.com/build/docs/automating-builds/github/build-repos-from-github?generation=2nd-gen#creating_a_github_trigger_2).\
    The following gcloud command provides a sample of creating this trigger. 
    ```bash
    gcloud builds triggers create github \
    --name="push-to-repo-triggers-build" \
    --repository="projects/${PROJECT_ID}/locations/us-central1/connections/my-conn/repositories/my-repo" \
    --branch-pattern=".*" \
    --build-config="cloudbuild.yaml" \
    --region=us-central1
    ```

# Usage

Create a tfvars file for your dev environment. The file should be named `dev.tfvars`, or whatever you name the development branch in your repository.

The file looks like this; substitute your own values for the examples below.

```bash
project_id = "your-project-id"
dataset_id = "a_dataset_id"
owner = "serviceaccount@developer.gserviceaccount.com"
```

Review the variables at the top of the `run_terraform.sh` script, and modify them to your liking.

Next, run the terraform script. Set the environment variable `BRANCH_NAME` to the branch you're working in.

```bash
env BRANCH_NAME="dev" bash run_terraform.sh
```

