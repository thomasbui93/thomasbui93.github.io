import fetch from "node-fetch"

export type Quote = {
  message: string
  author: string
}

const getQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch(
      process.env.QUOTE_URL || "https://quotes.rest/qod?language=en"
    )

    const json = await response.json()

    const quoteData = json.contents.quotes[0]

    return {
      message: quoteData.quote,
      author: quoteData.author,
    }
  } catch (ex: any) {
    console.error("Failed to fetch quote: ", ex.message)
    return {
      message: "In the end, it does not matter.",
      author: "Unknown",
    }
  }
}

export default getQuote
