import dotenv from 'dotenv/config'

import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // 環境変数から取得
})

async function main() {
    const message = await anthropic.messages.create({
        max_tokens: 1024,
        messages: [{ role: 'user', content: 'Hello, Claude' }],
        model: 'claude-3-opus-20240229',
    })

    console.log(message.content)
}

main()
