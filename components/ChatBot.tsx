import Script from "next/script";

const ChatbaseScript = () => {
	return (
		<>
			<Script
				strategy="afterInteractive" // Ensures the script runs after the page is interactive
				dangerouslySetInnerHTML={{
					__html: `
            (function(){
              if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...arguments) => {
                  if (!window.chatbase.q) {
                    window.chatbase.q = [];
                  }
                  window.chatbase.q.push(arguments);
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") {
                      return target.q;
                    }
                    return (...args) => target(prop, ...args);
                  }
                });
              }

              const onLoad = function() {
                const script = document.createElement("script");
                script.src = "${process.env.NEXT_PUBLIC_CHATBASE_SCRIPT_SRC}";
                script.id = "${process.env.NEXT_PUBLIC_CHATBASE_SCRIPT_ID}";
                script.domain = "${process.env.NEXT_PUBLIC_CHATBASE_DOMAIN}";
                document.body.appendChild(script);
              };

              if (document.readyState === "complete") {
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `,
				}}
			/>
		</>
	);
};

export default ChatbaseScript;
