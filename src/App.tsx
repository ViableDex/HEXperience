import { useState, useMemo } from 'react';
import { useGameEngine } from './hooks/useGameEngine';
import { HeaderBar } from './components/HeaderBar';
import { TollSimulationCanvas } from './components/TollSimulationCanvas';
import { UpgradePanel } from './components/UpgradePanel';
import { AgileAcademyModal } from './components/AgileAcademyModal';
import { StoryInspectorModal } from './components/StoryInspectorModal';
import { SprintRetrospectiveModal } from './components/SprintRetrospectiveModal';
import { DailyForecastModal } from './components/DailyForecastModal';
import { CompanyFooter } from './components/CompanyFooter';
import { ScenarioSelectModal } from './components/ScenarioSelectModal';
import { ScenarioOutcomeModal } from './components/ScenarioOutcomeModal';
import { ScenarioObjectiveHUD } from './components/ScenarioObjectiveHUD';
import { SprintPlanningModal } from './components/SprintPlanningModal';
import { MainMenu } from './components/MainMenu';

// HEXperience Platform Showcase Components
import { PlatformNavbar } from './components/hexperience/PlatformNavbar';
import { HeroSection } from './components/hexperience/HeroSection';
import { ProblemSection } from './components/hexperience/ProblemSection';
import { ScienceFoundationsSection } from './components/hexperience/ScienceFoundationsSection';
import { PlatformPillarsSection } from './components/hexperience/PlatformPillarsSection';
import { ExperienceCatalogSection } from './components/hexperience/ExperienceCatalogSection';
import { LeadershipTelemetrySection } from './components/hexperience/LeadershipTelemetrySection';
import { HexperienceFooter } from './components/hexperience/HexperienceFooter';
import { SimulationTopBar } from './components/hexperience/SimulationTopBar';

import { PREDETERMINED_SCENARIOS } from './data/scenarios';
import { ArrowLeft, Play, Sparkles } from 'lucide-react';

export default function App() {
  // Navigation mode: 'showcase' (HEXperience enterprise catalog) or 'simulation' (live Sprint Toll instance)
  const [viewMode, setViewMode] = useState<'showcase' | 'simulation'>('showcase');
  const [activeTab, setActiveTab] = useState<'simulation' | 'academy'>('simulation');
  const [isForecastOpen, setIsForecastOpen] = useState(false);
  const [isUpgradesOpen, setIsUpgradesOpen] = useState(false);

  const {
    funds,
    pendingDailyRevenue,
    dailyDues,
    totalDeliveredPoints,
    booths,
    ferry,
    vehicles,
    metrics,
    settings,
    sprintSummary,
    lastSprintSummary,
    dailyForecast,
    selectedVehicle,
    selectedBoothId,
    // Sprint Planning & Backlog
    backlogItems,
    isSprintPlanningOpen,
    openSprintPlanning,
    closeSprintPlanning,
    toggleBacklogItem,
    autoSelectOptimalBatch,
    selectAllBacklog,
    clearAllBacklog,
    sliceBacklogItem,
    addBacklogStory,
    removeBacklogItem,
    stageStoryInParkingLot,
    commitSprintPlanning,
    dispatchNextFromParkingLot,
    resolveBoothIncident,
    // Scenario engine
    activeScenario,
    activeScenarioDef,
    isScenarioSelectOpen,
    isScenarioOutcomeOpen,
    startScenario,
    restartScenario,
    resetToFreePlay,
    dismissScenarioNotification,
    openScenarioSelect,
    closeScenarioSelect,
    closeScenarioOutcome,
    // Main Menu
    isMainMenuOpen,
    setIsMainMenuOpen,
    hasStartedGame,
    openMainMenu,
    closeMainMenu,
    resumeGame,
    startNewFreePlayGame,
    // Season
    seasonNumber,
    nextSeason,
    prevSeason,
    changeSeason,
    // Actions
    addFunds,
    setDailyDuration,
    toggleContinuousFlowMode,
    spawnVehicle,
    sliceStory,
    launchFerry,
    unlockBooth,
    upgradeBoothEfficiency,
    upgradeBoothAutomation,
    upgradeBoothTraining,
    upgradeFerryCapacity,
    upgradeFerrySpeed,
    upgradeFerryAmenities,
    setLaneWipLimit,
    applyRecommendedWipLimit,
    setLaneSpecialization,
    toggleAutoDepart,
    toggleSound,
    setGameSpeed,
    setSelectedVehicle,
    setSelectedBoothId,
    setSprintSummary,
    openLastRetrospective
  } = useGameEngine();

  // Check if player has enough settled bank funds to afford any upgrade
  const hasAffordableUpgrades = useMemo(() => {
    return (
      booths.some((b) => {
        if (!b.unlocked && funds >= b.unlockCost) return true;
        if (b.unlocked) {
          const effCost = Math.round(75 * Math.pow(1.5, b.efficiencyLevel));
          const autoCost = Math.round(150 * Math.pow(1.7, b.automationLevel));
          const trainCost = Math.round(100 * Math.pow(1.6, b.trainingLevel));
          if (funds >= effCost || funds >= autoCost || funds >= trainCost) return true;
        }
        return false;
      }) ||
      funds >= Math.round(120 * Math.pow(1.6, ferry.capacityLevel)) ||
      funds >= Math.round(150 * Math.pow(1.7, ferry.speedLevel)) ||
      funds >= Math.round(200 * Math.pow(1.8, ferry.amenitiesLevel))
    );
  }, [booths, ferry, funds]);

  // Launch Sprint Toll instance (optionally with a preselected scenario)
  const handleLaunchSprintToll = (scenarioId?: string) => {
    if (scenarioId) {
      closeMainMenu();
      const targetScenario = PREDETERMINED_SCENARIOS.find((s) => s.id === scenarioId);
      if (targetScenario) {
        startScenario(targetScenario);
      }
    } else {
      // When loading the Sprint Toll experience from the HEXperience homescreen, load into Sprint Toll's home page!
      openMainMenu();
    }
    setViewMode('simulation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToShowcase = () => {
    closeMainMenu();
    setViewMode('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCatalog = () => {
    const el = document.querySelector('#catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05100B] text-[#F4F7F5] flex flex-col font-sans selection:bg-[#66BD29] selection:text-[#003624]">
      {/* =========================================================================
          VIEW MODE 1: HEXPERIENCE ENTERPRISE PLATFORM SHOWCASE & CATALOG
          ========================================================================= */}
      {viewMode === 'showcase' && (
        <div className="flex-1 flex flex-col bg-hex-matrix">
          {/* Sticky Platform Navigation */}
          <PlatformNavbar
            onLaunchSprintToll={() => handleLaunchSprintToll()}
          />

          {/* Main Showcase Page Architecture */}
          <main className="flex-1">
            {/* 1. Value Proposition (Centered Hero Section) */}
            <HeroSection onExploreCatalog={handleScrollToCatalog} />

            {/* 2. The HEXperience Catalog */}
            <ExperienceCatalogSection
              onLaunchSprintToll={handleLaunchSprintToll}
            />

            {/* 3. Business Problem: The Cost of Enterprise Amnesia */}
            <ProblemSection />

            {/* 4. Cognitive Science & Empirical Research Foundations */}
            <ScienceFoundationsSection />

            {/* 5. Universal Pillars of Interactive Corporate Media */}
            <PlatformPillarsSection />

            {/* 6. Leadership Telemetry & Enterprise Analytics (Kirkpatrick Model) */}
            <LeadershipTelemetrySection />
          </main>

          {/* Platform Footer */}
          <HexperienceFooter
            onLaunchSprintToll={() => handleLaunchSprintToll()}
          />
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 2: LIVE SIMULATION SANDBOX (SPRINT TOLL v1.0)
          ========================================================================= */}
      {viewMode === 'simulation' && (
        <div className="flex-1 flex flex-col bg-[#2B2F38] text-[#F4F6F9]">
          {/* High-Tech Enterprise Simulation Top Bar */}
          <SimulationTopBar
            onReturnToShowcase={handleReturnToShowcase}
            onOpenScenarioSelect={openScenarioSelect}
            onSelectScenario={startScenario}
            onResetToFreePlay={resetToFreePlay}
            activeScenarioTitle={activeScenarioDef?.title}
            activeScenarioDay={activeScenario?.currentDay}
            activeScenarioTotalDays={activeScenarioDef?.durationDays}
            funds={funds}
            totalPoints={totalDeliveredPoints}
            soundEnabled={settings.soundEnabled}
            onToggleSound={toggleSound}
          />

          {/* Universal Game Header Bar with Daily Sprint Cadence & Escrow */}
          <HeaderBar
            onOpenMainMenu={openMainMenu}
            funds={funds}
            pendingDailyRevenue={pendingDailyRevenue}
            dailyDuesAmount={dailyDues?.totalDailyDues ?? 0}
            totalPoints={totalDeliveredPoints}
            ferryPoints={ferry.currentPoints}
            ferryCapacity={ferry.capacity}
            dayNumber={ferry.dayNumber}
            dayTimeFormatted={ferry.dayTimeFormatted}
            sprintTimer={ferry.sprintTimer}
            ferryState={ferry.state}
            settings={settings}
            activeTab={activeTab}
            forecast={dailyForecast}
            onOpenForecast={() => setIsForecastOpen(true)}
            onOpenScenarios={openScenarioSelect}
            onOpenSprintPlanning={openSprintPlanning}
            onOpenUpgrades={() => setIsUpgradesOpen(true)}
            hasAffordableUpgrades={hasAffordableUpgrades}
            activeScenarioTitle={activeScenarioDef?.title}
            activeScenarioDay={activeScenario?.currentDay}
            activeScenarioTotalDays={activeScenarioDef?.durationDays}
            onTabChange={setActiveTab}
            onToggleSound={toggleSound}
            onSetSpeed={setGameSpeed}
            onLaunchFerry={launchFerry}
            onToggleContinuousFlow={toggleContinuousFlowMode}
            onOpenRetrospective={openLastRetrospective}
            hasLastRetrospective={!!lastSprintSummary}
            ferryReady={ferry.currentPoints > 0 && ferry.state === 'boarding'}
            isRetroOpen={!!sprintSummary}
          />

          {/* Main Simulation View Area */}
          <main className="flex-1 max-w-[1580px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            {activeTab === 'simulation' && (
              <div className="space-y-8">
                {/* Active Predetermined Scenario Objective HUD */}
                <ScenarioObjectiveHUD
                  scenarioState={activeScenario}
                  scenarioDef={activeScenarioDef}
                  onOpenDetails={openScenarioSelect}
                  onDismissNotification={dismissScenarioNotification}
                  onAbandonScenario={resetToFreePlay}
                  currentQueueLength={
                    vehicles.filter(
                      (v) => v.state === 'approaching' || v.state === 'queued' || v.state === 'processing'
                    ).length
                  }
                  currentFunds={funds}
                  currentEfficiency={metrics.flowEfficiency}
                  unlockedLanesCount={booths.filter((b) => b.unlocked).length}
                  ezpassTier2Count={booths.filter((b) => b.unlocked && b.automationLevel >= 2).length}
                />

                {/* Visual Simulation Canvas */}
                <TollSimulationCanvas
                  booths={booths}
                  ferry={ferry}
                  vehicles={vehicles}
                  metrics={metrics}
                  onSelectVehicle={setSelectedVehicle}
                  onSelectBooth={(id) => {
                    setSelectedBoothId(id);
                    setIsUpgradesOpen(true);
                  }}
                  onSliceStory={sliceStory}
                  onUnlockBooth={unlockBooth}
                  onLaunchFerry={launchFerry}
                  onUpgradeEfficiency={upgradeBoothEfficiency}
                  onUpgradeAutomation={upgradeBoothAutomation}
                  onSetLaneWipLimit={setLaneWipLimit}
                  continuousFlowMode={settings.continuousFlowMode}
                  onToggleContinuousFlow={toggleContinuousFlowMode}
                  funds={funds}
                  onResolveIncident={resolveBoothIncident}
                  onDispatchFromParkingLot={dispatchNextFromParkingLot}
                  onOpenSprintPlanning={openSprintPlanning}
                  onOpenUpgrades={() => setIsUpgradesOpen(true)}
                />
              </div>
            )}

            {activeTab === 'academy' && (
              <AgileAcademyModal
                onAwardBonus={(amount) => {
                  addFunds(amount);
                }}
              />
            )}
          </main>

          {/* Development Company & Copyright Branding */}
          <CompanyFooter />

          {/* Floating Sandbox Quick Return Pill for Judges */}
          <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full bg-slate-950/90 border border-indigo-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <button
              onClick={handleReturnToShowcase}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Catalog & Science</span>
            </button>
            <button
              onClick={openScenarioSelect}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors cursor-pointer"
            >
              Switch Scenario
            </button>
          </div>

          {/* =========================================================================
              GAME ENGINE MODALS & OVERLAYS (Only active in simulation mode)
              ========================================================================= */}
          {isUpgradesOpen && (
            <UpgradePanel
              isOpen={isUpgradesOpen}
              onClose={() => setIsUpgradesOpen(false)}
              booths={booths}
              ferry={ferry}
              funds={funds}
              pendingDailyRevenue={pendingDailyRevenue}
              dailyDues={dailyDues}
              selectedBoothId={selectedBoothId}
              onSelectBooth={setSelectedBoothId}
              onUnlockBooth={unlockBooth}
              onUpgradeEfficiency={upgradeBoothEfficiency}
              onUpgradeAutomation={upgradeBoothAutomation}
              onUpgradeTraining={upgradeBoothTraining}
              onUpgradeFerryCapacity={upgradeFerryCapacity}
              onUpgradeFerrySpeed={upgradeFerrySpeed}
              onUpgradeFerryAmenities={upgradeFerryAmenities}
              onSetWipLimit={setLaneWipLimit}
              onSetSpecialization={setLaneSpecialization}
              onToggleAutoDepart={toggleAutoDepart}
              onSetDailyDuration={setDailyDuration}
              continuousFlowMode={settings.continuousFlowMode}
              onToggleContinuousFlow={toggleContinuousFlowMode}
              onResolveIncident={resolveBoothIncident}
            />
          )}

          <SprintPlanningModal
            isOpen={isSprintPlanningOpen}
            onClose={closeSprintPlanning}
            dayNumber={ferry.dayNumber}
            ferry={ferry}
            booths={booths}
            backlogItems={backlogItems}
            onToggleItem={toggleBacklogItem}
            onAutoSelect={autoSelectOptimalBatch}
            onSliceItem={sliceBacklogItem}
            onCommitSprint={commitSprintPlanning}
            onSelectAll={selectAllBacklog}
            onClearAll={clearAllBacklog}
            onAddStory={addBacklogStory}
            onRemoveItem={removeBacklogItem}
          />

          <StoryInspectorModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
            onSliceStory={sliceStory}
          />

          <SprintRetrospectiveModal
            summary={sprintSummary}
            onClose={() => setSprintSummary(null)}
          />

          <DailyForecastModal
            isOpen={isForecastOpen}
            onClose={() => setIsForecastOpen(false)}
            forecast={dailyForecast}
            booths={booths}
            onApplyRecommendedWip={applyRecommendedWipLimit}
            onSetLaneWip={setLaneWipLimit}
          />

          {/* Predetermined Tech Scenarios Select Modal */}
          <ScenarioSelectModal
            isOpen={isScenarioSelectOpen}
            onClose={closeScenarioSelect}
            activeScenarioId={activeScenario?.scenarioId || null}
            onSelectScenario={(sc) => {
              startScenario(sc);
              setViewMode('simulation');
            }}
            onResetToFreePlay={resetToFreePlay}
          />

          {/* Scenario Outcome & Post-Mortem Modal */}
          {isScenarioOutcomeOpen && activeScenario && activeScenarioDef && (
            <ScenarioOutcomeModal
              scenarioState={activeScenario}
              scenarioDef={activeScenarioDef}
              onRestartScenario={restartScenario}
              onChooseAnotherScenario={openScenarioSelect}
              onReturnToFreePlay={resetToFreePlay}
              onReturnToMainMenu={openMainMenu}
            />
          )}

          {/* Main Menu & Initial Start Screen */}
          <MainMenu
            isOpen={isMainMenuOpen}
            hasActiveGame={hasStartedGame}
            dayNumber={ferry.dayNumber}
            dayTimeFormatted={ferry.dayTimeFormatted}
            funds={funds}
            totalPoints={totalDeliveredPoints}
            ferryPoints={ferry.currentPoints}
            ferryCapacity={ferry.capacity}
            seasonNumber={seasonNumber}
            onNextSeason={nextSeason}
            onPrevSeason={prevSeason}
            onChangeSeason={changeSeason}
            activeScenarioTitle={activeScenarioDef?.title}
            soundEnabled={settings.soundEnabled}
            continuousFlowMode={settings.continuousFlowMode}
            gameSpeed={settings.gameSpeed}
            onReturnToShowcase={handleReturnToShowcase}
            onResumeGame={() => {
              resumeGame();
              setViewMode('simulation');
            }}
            onStartNewGame={() => {
              startNewFreePlayGame();
              setViewMode('simulation');
            }}
            onOpenScenarios={openScenarioSelect}
            onSelectScenario={(scenario) => {
              startScenario(scenario);
              setViewMode('simulation');
            }}
            onOpenAcademy={() => {
              setActiveTab('academy');
              closeMainMenu();
              setViewMode('simulation');
            }}
            onOpenSprintPlanning={() => {
              openSprintPlanning();
              closeMainMenu();
            }}
            onOpenUpgrades={() => {
              closeMainMenu();
              setIsUpgradesOpen(true);
            }}
            onToggleSound={toggleSound}
            onToggleContinuousFlow={toggleContinuousFlowMode}
            onSetGameSpeed={setGameSpeed}
          />
        </div>
      )}
    </div>
  );
}
