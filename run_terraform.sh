#!/bin/sh -ex

# Bucket name happens to be the same as the project ID.
# Update this if you want to use a different bucket.
TF_BACKEND_BUCKET="${PROJECT_ID}"
TF_BACKEND_PREFIX="terraform/state/${BRANCH_NAME}"

cd terraform || (echo "Could not change directory."; exit)

DIR="environments/${BRANCH_NAME}/"
if [ -d "${DIR}" ]; then
    cd "${DIR}" || (echo "Could not cd to ${DIR}"; exit)
    terraform init \
        -backend-config="bucket=${TF_BACKEND_BUCKET}" \
        -backend-config="prefix=${TF_BACKEND_PREFIX}"
    terraform apply -auto-approve \
        -var-file="../../../${BRANCH_NAME}.tfvars"

else
    echo "***************************** SKIPPING APPLYING *******************************"
    echo "Branch '$BRANCH_NAME' does not represent an official environment."
    echo "*******************************************************************************"
fi