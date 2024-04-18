terraform {
  backend "gcs" {
    bucket  = "danny-bq-test"
    prefix  = "terraform/state/test"
  }
}