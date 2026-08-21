from decimal import Decimal

from django.test import TestCase
from django.urls import reverse

from .models import WalkLog, Walker


class WalkingLogLeaderboardTests(TestCase):
	def test_walking_log_shows_top_three_walkers_by_total_distance(self):
		walkers = []
		for name, distance in [
			("Anu", "8.00"),
			("Bala", "15.00"),
			("Chitra", "12.00"),
			("Deepa", "3.00"),
		]:
			walker = Walker.objects.create(name=name, age=30, weight_kg=Decimal("60.00"))
			WalkLog.objects.create(
				walker=walker,
				weight_kg=Decimal("60.00"),
				distance_km=Decimal(distance),
				calories_burnt=Decimal("100.00"),
			)
			walkers.append(walker)

		response = self.client.get(reverse("walking_log"))

		self.assertEqual(response.status_code, 200)
		self.assertEqual(
			[leader.name for leader in response.context["distance_leaders"]],
			["Bala", "Chitra", "Anu"],
		)
		self.assertContains(response, 'class="leaderboard-select" data-id="%s"' % walkers[1].id)

	def test_walking_log_data_returns_only_five_recent_walks(self):
		walker = Walker.objects.create(name="Meera", age=32, weight_kg=Decimal("58.00"))
		for distance in range(1, 7):
			WalkLog.objects.create(
				walker=walker,
				weight_kg=Decimal("58.00"),
				distance_km=Decimal(str(distance)),
				calories_burnt=Decimal("100.00"),
			)

		response = self.client.get(reverse("walking_log_data"), {"walker_id": walker.id})

		self.assertEqual(response.status_code, 200)
		self.assertEqual(len(response.json()["recent"]), 5)
