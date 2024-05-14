module "bigquery-dataset" {
  source     = "github.com/GoogleCloudPlatform/cloud-foundation-fabric//modules/bigquery-dataset?ref=v30.0.0&depth=1"
  project_id = var.project_id
  id         = var.dataset_id
  location   = var.location
  access = {
    owner          = { role = "READER", type = "user" }
  }
  access_identities = {
    owner          = var.owner
  }
}