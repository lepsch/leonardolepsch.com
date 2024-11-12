import { reactRouter } from "@react-router/dev/vite"
import { defineConfig, type Plugin } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import sitemap from "vite-plugin-sitemap"
import { BASE_URL, IMAGES_PER_PAGE } from "./app/constants"
import galleries from "./app/galleries"
import { canonicalPath } from "./app/canonical-path"
import { getGalleryTotalPages } from "./app/utils"

const dynamicRoutes = [
  ...galleries.flatMap((gallery) =>
    Array.from({ length: getGalleryTotalPages(gallery) }).flatMap((_, page) => [
      canonicalPath[gallery.id](),
      canonicalPath[gallery.id]({ page }),
      ...Array.from({ length: IMAGES_PER_PAGE }).map((_, photoIndex) =>
        canonicalPath[gallery.id]({ page, photoIndex }),
      ),
    ]),
  ),
]

export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [
    reactRouter({
      prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...dynamicRoutes],
    }),
    tsconfigPaths(),
    sitemap({
      hostname: BASE_URL,
      exclude: ["/tarteaucitronjs"],
      outDir: "build/client",
      robots: [
        {
          userAgent: "*",
          disallow: ["/tarteaucitronjs/"],
        },
      ],
      changefreq: "monthly",
      dynamicRoutes,
      priority: {
        "/": 1.0,
        "/contact": 0.9,
        ...dynamicRoutes.reduce(
          (result, dynamicRoute) => ({
            ...result,
            [dynamicRoute]: 0.8,
          }),
          {},
        ),
      },
    }) as Plugin,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      ...(isSsrBuild
        ? {}
        : {
            // Compile a separate entry-point for sourcing it from `<script />`
            input: ["./app/tarteaucitron-init.ts"],
            output: {
              entryFileNames: (chunkInfo) =>
                chunkInfo.name === "tarteaucitron-init" ? "assets/[name].js" : "assets/[name]-[hash].js",
            },
          }),
    },
  },
  define: {
    // For dev-server set it to the source code itself. Otherwise, set it
    // to the compiled asset
    TARTEAUCITRON_INIT_URL: JSON.stringify(
      command === "build" ? "/assets/tarteaucitron-init.js" : "/app/tarteaucitron-init.ts",
    ),
  },
}))
