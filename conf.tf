provider "google" {
  region = "us-west4-b"
}

resource "google_compute_instance" "instance2402" {
  name        = "instance2402"
  id           = "460526582968571464"
  machine_type = "e2-standard-16"
  boot_disk = "ubuntu-2204-jammy-v20240223"
  network_interface = "10.182.0.8"
  instance_type = "e2-standard-16"

}
output "public_ip" {
  value = "http://34.125.184.52"
}