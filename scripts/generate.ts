import {DirectoryLoader} from "langchain/document_loaders/fs/directory";
import {TextLoader} from "langchain/document_loaders/fs/text";
import {DocumentInterface} from "@langchain/core/documents"
import { Recursive } from "next/font/google";

async function generateEmbeddings() {
    const loader = new DirectoryLoader(
        "src/app/",
        {
            ".tsx": (path) => new TextLoader(path),
        },
        true
    )

    const docs = (await loader.load())
    .filter(doc => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
        const url = doc.metadata.source
        .replace(/\\/g,"/")
        .split("/src/app")[1]
        .split("/page.")[0] || "/";

        const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm,"") // Removes all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") //remove all className
        .replace(/^\s*[\r]/gm,"") // removes empty lines
        .trim();

        return {
            pageContent: doc.pageContent,
            metadata: { url }
        };
    });
    //const splitter = RecursiveCharacterTextSplitter.fromLanguage("html")

    console.log(docs);
    
}

generateEmbeddings();