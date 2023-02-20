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
            "ano",
            "leanix",
            "softway",
            "testmandi",
            "bharg",
            "kiit",
            "dps",
            "sphs",
            "blog1",
            "paper1",
            "article1",
            "article2",
            "article1"
        ]
    })
  ]
};