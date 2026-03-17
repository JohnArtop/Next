import contentstack from 'contentstack';

const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY!,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
});

export const getEntry = async (contentType: string) => {
  const result = await Stack.ContentType(contentType).Query().toJSON().find();
  return result[0];
};