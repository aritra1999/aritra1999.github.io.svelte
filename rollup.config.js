import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
  plugins: [
    dynamicImportVars({
        include: [
            "random",
            "gitbub",
            "sdc",
            "betterclass",
            "autoclip",
            "devstack",
            "codevox",
            "cpide",
            "ecomm",
            "autoclip",
            "justrun",
            "newtab",
            "emailauth",
            "ano"
        ]
    })
  ]
};