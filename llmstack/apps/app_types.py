import uuid

from llmstack.apps.models import App

from .types.agent import Agent  # noqa: F401
from .types.app_type_interface import AppTypeInterface
from .types.chat import ChatApp  # noqa: F401
from .types.discord import DiscordApp  # noqa: F401
from .types.slack import SlackApp  # noqa: F401
from .types.twilio import TwilioApp  # noqa: F401
from .types.voice_agent import VoiceAgent  # noqa: F401
from .types.web import WebApp  # noqa: F401
from .types.workflow import Workflow  # noqa: F401


class AppTypeFactory:
    """
    Factory class for App types
    """

    @staticmethod
    def get_app_type_handler(
        app_type_slug: str,
        platform: str = None,
    ) -> AppTypeInterface:
        subclasses = AppTypeInterface.__subclasses__()
        # Match with platform
        if platform:
            for subclass in subclasses:
                # Convert to lowercase to avoid case sensitivity
                if subclass.slug().lower() == platform.lower():
                    return subclass

        # Match with slug
        for subclass in subclasses:
            if subclass.slug() == app_type_slug.lower():
                return subclass

        return None

    @staticmethod
    def get_app_type_signature_verifier(app_id: str, platform: str = "web"):
        app = App.objects.get(uuid=uuid.UUID(app_id))
        app_type_handler = AppTypeFactory.get_app_type_handler(
            app.type.slug if app.type else app.type_slug,
            platform,
        )

        return app, app_type_handler.verify_request_signature
