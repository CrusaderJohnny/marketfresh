import { Card, Text } from '@mantine/core';

export default function VendorCard({ vendor }) {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Text weight={500} mb="xs">{vendor.name}</Text>
      <Text size="sm" c="dimmed">
        Category: {vendor.category}
      </Text>
      <Text size="sm" c="dimmed">
        Location: {vendor.location}
      </Text>
    </Card>
  );
}
