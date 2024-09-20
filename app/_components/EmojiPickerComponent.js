import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

function EmojiPickerComponent({ children }) {
  const [openEmojiPicker, setopenEmojiPicker] = useState(false)
  return (
    <div>
      <div>
        {children}
      </div>
      {openEmojiPicker &&
        <div><EmojiPicker /></div>}

    </div>
  );
}

export default EmojiPickerComponent;
