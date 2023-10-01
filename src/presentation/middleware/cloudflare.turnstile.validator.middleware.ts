import { CloudflareTurnstileResponse } from "@/data/protocols/http/captcha/cloudflare.turnstile.validator.middleware";

export const CloudflareTurnstileValidator =
	() => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
		const originalMethod = descriptor.value;
		descriptor.value = async function (...params: any[]) {
			const ip = params[0].ip;
			const env = params[0].env;
			const captchaResponse = params[0]?.body?.captchaResponse || "";

			if (env.NODE_ENV === "test") {
				return originalMethod.apply(this, params);
			}

			if (!captchaResponse) {
				return `no.captcha`;
			}

			const formData = new FormData();
			formData.append("secret", env.CLOUDFLARE_TURNSTILE_SECRET_KEY || "");
			formData.append("response", captchaResponse);
			formData.append("remoteip", ip);

			const captchaFetchResult = await fetch(env.CLOUDFLARE_TURNSTILE_URL || "", {
				method: "POST",
				body: formData,
			});
			const captchaResult: CloudflareTurnstileResponse = await captchaFetchResult.json();

			if (captchaResult && captchaResult.success) {
				return originalMethod.apply(this, params);
			}
			return `invalid.captcha`;
		};
		return descriptor;
	};
