"use client"
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <StarryBackground /> */}
      <div className='w-[80%] mx-auto mt-20'>
        <div className="my-10 font-bold tracking-tight text-5xl md:text-6xl">
          <span className="text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Web{" "}
          </span>
          <span className="text-foreground" style={{ textShadow: "0 0 8px var(--foreground)" }}>
            Client{" "}
          </span>
          <span className="text-rose-600" style={{ textShadow: "0 0 8px hsl(347, 77%, 50%)" }}>
            API
          </span>
        </div>
        <div className="mb-10 text-xl md:text-2xl"> In hac assignment #2, web client development is the primary focus, utilizing HTML, CSS, and JavaScript. The project requires configuring drone data, building interactive forms, and displaying logs in a structured format. API integration ensures real-time data handling, while the UI enhances user experience.</div>
        <div>
          <Link
            className="middle none center mr-3 rounded-lg bg-rose-600 py-3 px-6 font-sans text-sm md:text-base font-bold uppercase text-white shadow-md shadow-rose-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            href="/assignment/view-config"
          >
            Get Started
          </Link>
        </div>
        <div className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem soluta modi magnam error saepe. Libero nam odio commodi aut est sunt, voluptatem perspiciatis blanditiis dolores nulla veritatis architecto, temporibus ab. Velit commodi vitae aperiam rem ratione, fugit quos minima aut pariatur ipsam corporis rerum cum, alias molestias cupiditate, architecto ut provident! Nobis, delectus sint molestias unde at dicta non ab quia adipisci aperiam voluptatum aliquam asperiores dignissimos numquam nostrum dolorem odit est pariatur neque! Distinctio enim debitis tempora ullam odit ipsam, beatae dolor delectus eveniet cum quia iusto sapiente repellat totam itaque voluptates ipsum natus et rerum accusamus quas? Dolor minus iure incidunt magni architecto nobis accusamus minima ipsa id, molestias aut tempora sint quas maiores est fugiat quam sequi repellendus dolorum ut, in quo molestiae eum alias? Inventore omnis provident nobis quia officia laborum cupiditate neque ipsa eligendi rem, in odit iure officiis facilis alias obcaecati expedita blanditiis, dolorum eaque sunt voluptatum. Animi corporis necessitatibus dolorum eius. Autem ea magni aperiam minus repellendus aliquid explicabo reprehenderit velit dicta, temporibus neque? Debitis eos dolorem repellat est sequi deleniti natus numquam laudantium velit expedita dolor sint quisquam ea nesciunt, beatae ullam illo possimus minus animi ex ipsa obcaecati. Porro, vero? Magni, eaque corrupti excepturi a non voluptates perferendis iusto eius, debitis perspiciatis rem quasi est at illo sapiente blanditiis voluptatum distinctio totam ut vitae repellendus odit. Aperiam laboriosam aut velit hic perspiciatis, dolores omnis consequatur corrupti et consequuntur harum ab fuga deleniti aliquam impedit excepturi? Temporibus perferendis eaque, unde repellat ab et, recusandae mollitia cupiditate laboriosam culpa tempore ipsam blanditiis quaerat facilis similique iste, vitae numquam cum excepturi? Voluptates tenetur dolores ratione ullam eos. Provident eligendi adipisci deserunt iusto tempora iste id eveniet perferendis quam odio. Laudantium doloremque deleniti necessitatibus repudiandae sed assumenda repellat esse fugit impedit, corrupti illum amet officiis delectus nemo, reprehenderit nisi, corporis harum est provident neque veniam tempora placeat! Molestiae, illo obcaecati ducimus, expedita unde, velit optio consequatur doloribus vel soluta quasi accusamus nulla quisquam. Tempora ratione unde et accusamus consequatur ea laborum illum odit!</div>
        
        <div className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem soluta modi magnam error saepe. Libero nam odio commodi aut est sunt, voluptatem perspiciatis blanditiis dolores nulla veritatis architecto, temporibus ab. Velit commodi vitae aperiam rem ratione, fugit quos minima aut pariatur ipsam corporis rerum cum, alias molestias cupiditate, architecto ut provident! Nobis, delectus sint molestias unde at dicta non ab quia adipisci aperiam voluptatum aliquam asperiores dignissimos numquam nostrum dolorem odit est pariatur neque! Distinctio enim debitis tempora ullam odit ipsam, beatae dolor delectus eveniet cum quia iusto sapiente repellat totam itaque voluptates ipsum natus et rerum accusamus quas? Dolor minus iure incidunt magni architecto nobis accusamus minima ipsa id, molestias aut tempora sint quas maiores est fugiat quam sequi repellendus dolorum ut, in quo molestiae eum alias? Inventore omnis provident nobis quia officia laborum cupiditate neque ipsa eligendi rem, in odit iure officiis facilis alias obcaecati expedita blanditiis, dolorum eaque sunt voluptatum. Animi corporis necessitatibus dolorum eius. Autem ea magni aperiam minus repellendus aliquid explicabo reprehenderit velit dicta, temporibus neque? Debitis eos dolorem repellat est sequi deleniti natus numquam laudantium velit expedita dolor sint quisquam ea nesciunt, beatae ullam illo possimus minus animi ex ipsa obcaecati. Porro, vero? Magni, eaque corrupti excepturi a non voluptates perferendis iusto eius, debitis perspiciatis rem quasi est at illo sapiente blanditiis voluptatum distinctio totam ut vitae repellendus odit. Aperiam laboriosam aut velit hic perspiciatis, dolores omnis consequatur corrupti et consequuntur harum ab fuga deleniti aliquam impedit excepturi? Temporibus perferendis eaque, unde repellat ab et, recusandae mollitia cupiditate laboriosam culpa tempore ipsam blanditiis quaerat facilis similique iste, vitae numquam cum excepturi? Voluptates tenetur dolores ratione ullam eos. Provident eligendi adipisci deserunt iusto tempora iste id eveniet perferendis quam odio. Laudantium doloremque deleniti necessitatibus repudiandae sed assumenda repellat esse fugit impedit, corrupti illum amet officiis delectus nemo, reprehenderit nisi, corporis harum est provident neque veniam tempora placeat! Molestiae, illo obcaecati ducimus, expedita unde, velit optio consequatur doloribus vel soluta quasi accusamus nulla quisquam. Tempora ratione unde et accusamus consequatur ea laborum illum odit!</div>
      </div>
    </div>
  );
}
