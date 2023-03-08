export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- Based on [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat);
- 设置里面填入自己的Openai API Key 才可使用；
- 定义角色也在设置里面；
- **Shift+Enter** 换行。开头输入 **/** 或者 **空格** 搜索 Prompt 预设。
- [More AI Tools--yongmai.xyz](http://yongmai.xyz/)`
