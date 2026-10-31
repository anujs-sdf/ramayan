"""A short, choice-driven journey through the Ramayana."""


def choose(prompt: str, options: tuple[str, ...]) -> int:
    """Show a numbered choice and return its zero-based index."""
    print(f"\n{prompt}")
    for number, option in enumerate(options, start=1):
        print(f"  {number}. {option}")

    while True:
        answer = input("Choose a path: ").strip()
        if answer.isdigit() and 1 <= int(answer) <= len(options):
            return int(answer) - 1
        print(f"Enter a number from 1 to {len(options)}.")


def play_story() -> None:
    """Play one retelling of the journey from Ayodhya and back."""
    compassion = 0
    resolve = 0

    print("=" * 58)
    print("THE RAMAYANA: A JOURNEY OF COURAGE AND COMPASSION")
    print("=" * 58)
    print(
        "In Ayodhya, Prince Rama is asked to leave the kingdom for fourteen "
        "years. Sita chooses to go with him, and Lakshmana joins them. "
        "Their path leads from the palace into the forest."
    )

    choice = choose(
        "As the forest journey begins, what guides Rama?",
        (
            "Keep his promise calmly, trusting Bharata to care for Ayodhya.",
            "Speak with Bharata first, so duty and family can part in peace.",
        ),
    )
    if choice == 0:
        resolve += 1
        print(
            "Rama keeps his word. Bharata later refuses the throne for himself "
            "and rules as its caretaker, placing Rama's sandals upon the throne."
        )
    else:
        compassion += 1
        print(
            "The brothers part with affection. Bharata promises to protect "
            "Ayodhya and wait faithfully for Rama's return."
        )

    print(
        "Years pass. In the forest, Ravana carries Sita away to Lanka. "
        "Rama and Lakshmana search for her, and meet Hanuman, whose courage "
        "and devotion turn grief into hope."
    )
    choice = choose(
        "Hanuman prepares to cross the ocean. What does Rama offer?",
        (
            "A blessing and complete trust in Hanuman's courage.",
            "His ring, so Sita will know that help is coming.",
        ),
    )
    if choice == 0:
        resolve += 1
        print(
            "Hanuman rises to the task. His journey brings news of Sita and "
            "rekindles hope among the allies."
        )
    else:
        compassion += 1
        print(
            "Hanuman carries Rama's ring across the sea. Sita recognizes it "
            "and sends word that she still holds fast."
        )

    print(
        "Ravana is urged to return Sita, but he will not. Vibhishana leaves "
        "Lanka and joins Rama. With the help of their allies, Rama's forces "
        "cross the ocean."
    )
    choice = choose(
        "At Lanka's gates, how should Rama meet the final challenge?",
        (
            "Offer Ravana one last chance to make peace and return Sita.",
            "Stand firm with his allies and prepare to defend what is right.",
        ),
    )
    if choice == 0:
        compassion += 1
        print(
            "Rama offers peace once more. When Ravana rejects it, the battle "
            "begins with no doubt that a peaceful path was tried."
        )
    else:
        resolve += 1
        print(
            "Rama and his allies face the danger together. Their trust in one "
            "another carries them through the battle."
        )

    print(
        "Ravana is defeated, and Sita is reunited with Rama. After fourteen "
        "years, the companions return to Ayodhya, where Bharata welcomes them "
        "home."
    )
    if compassion > resolve:
        print(
            "Your telling ends with a gentle lesson: courage is strongest "
            "when it leaves room for kindness."
        )
    elif resolve > compassion:
        print(
            "Your telling ends with a steadfast lesson: promises and courage "
            "can guide a long road home."
        )
    else:
        print(
            "Your telling ends in balance: a long road asks for both a brave "
            "heart and a compassionate one."
        )


def main() -> None:
    """Offer a replay after each completed story."""
    while True:
        play_story()
        again = input("\nWould you like to hear the story again? (y/n): ").strip().lower()
        if again not in ("y", "yes"):
            print("Thank you for sharing the journey.")
            break


if __name__ == "__main__":
    main()