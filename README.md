# Overview

...


# Usage Prerequisites

We assume that you have already set up the Cloud Storage bucket you intend to use as
Terraform state backend, and we assume that IAM has been configured appropriately for
Terraform state and for BigQuery usage.


# Usage

Create a tfvars file for your dev environment. The file should be named `dev.tfvars`, or whatever you name the development branch in your repository.

The file looks like this; substitute your own values for the examples below.

```commandline
project_id = "your-project-id"
dataset_id = "a_dataset_id"
owner = "serviceaccount@developer.gserviceaccount.com"
```

Review the variables at the top of the `run_terraform.sh` script, and modify them to your liking.

Next, run the terraform script. Set the environment variable `BRANCH_NAME` to the branch you're working in.

```commandline
env BRANCH_NAME="dev" bash run_terraform.sh
```

