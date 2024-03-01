provider "google" {
  region = "us-west4-b"
}

resource "google_compute_instance" "instance2402" {
  id           = "460526582968571464"
  instance_type = "e2-standard-16"
}
output "public_ip" {
  value = "http://34.125.184.52"
}