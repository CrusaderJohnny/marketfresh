"use client";
import { Container, Title } from "@mantine/core";
import VendorCard from "./vendorCard";
import vendorList from "./vendorData"; 

export default function VendorsPage() {
  return (
    <Container>
      <Title order={1}>Our Vendors</Title>
      {vendorList.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </Container>
  );
}
