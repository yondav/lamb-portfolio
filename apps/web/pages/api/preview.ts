import type { NextApiRequest, NextApiResponse } from 'next';

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, path, type } = req.query;

  const redirect = () => {
    if (type && path) return `/${type}/${path}`;
    if (!type && path) return `/${path}`;
    return '/';
  };

  if (secret !== (process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN as string)) {
    return res.status(401).json({ message: 'Invalid token or path' });
  }

  res.setPreviewData(`sanitySession=${secret}`);
  res.redirect(redirect());
  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv='Refresh' content='0; url=${path}' />
  //       <script>window.location.href = '${path}'</script>
  //       </head>`
  // );
  res.end();
}
