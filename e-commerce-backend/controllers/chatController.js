const OpenAI=require("openai");

const queryGPT=(req,res)=>{
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_SECRET_KEY
    });
    const result=openai.chat.completions.create({
        messages:[{
            role:"system",
            content:"you are a helpful assistant. Your name is e-commerce assistant. you are a chat bot for the E-commerce Application. If the question is out of E-commerce type return message: Sorry, the question is our of topic.You can introduce youself with basic information"
        },
        {
            role:"user",
            content:req.body?.input
        }
    ],
        model:"gpt-3.5-turbo"
    });
    return res.json({
        result:result.choices[0].messages.content
    });
    
};
module.exports={
    queryGPT
};