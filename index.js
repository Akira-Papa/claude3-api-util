import dotenv from 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // 環境変数から取得
})

try {
    const messageStream = await anthropic.messages.stream({
        messages: [{ role: 'user', content: 'Hello' }],
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
    })

    messageStream.on('text', (text) => {
        process.stdout.write(text + '')
    })
} catch (error) {
    console.error('An error occurred while streaming messages:', error)
}
