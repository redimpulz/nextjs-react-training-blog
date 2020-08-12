import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Alert from '@/components/Alert';

// export default function FirstPost() {
//   return <h1>First Post</h1>;
// }

// export default function FirstPost() {
//   return (
//     <>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </>
//   );
// }

// export default function FirstPost() {
//   return (
//     <>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </>
//   );
// }

// export default function FirstPost() {
//   return (
//     <Layout>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </Layout>
//   );
// }

// fadfa

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Alert type="success">success</Alert>
      <Alert type="error">error</Alert>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
