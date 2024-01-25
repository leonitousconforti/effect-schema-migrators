import * as S from "@effect/schema/Schema"

export enum Port_Type {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum MountPoint_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum RestartPolicy_Name {
  "" = "",
  "no" = "no",
  "always" = "always",
  "unless-stopped" = "unless-stopped",
  "on-failure" = "on-failure"
}

export enum Health_Status {
  "none" = "none",
  "starting" = "starting",
  "healthy" = "healthy",
  "unhealthy" = "unhealthy"
}

export enum HostConfig_LogConfig_Type {
  "json-file" = "json-file",
  "syslog" = "syslog",
  "journald" = "journald",
  "gelf" = "gelf",
  "fluentd" = "fluentd",
  "awslogs" = "awslogs",
  "splunk" = "splunk",
  "etwlogs" = "etwlogs",
  "none" = "none"
}

export enum HostConfig_CgroupnsMode {
  "private" = "private",
  "host" = "host"
}

export enum HostConfig_Isolation {
  "default" = "default",
  "process" = "process",
  "hyperv" = "hyperv"
}

export enum HostConfig_RestartPolicy_Name {
  "" = "",
  "no" = "no",
  "always" = "always",
  "unless-stopped" = "unless-stopped",
  "on-failure" = "on-failure"
}

export enum HostConfig_Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum HostConfig_Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum ContainerConfig_ExposedPorts {
  "[object Object]" = "[object Object]"
}

export enum ContainerConfig_Volumes {
  "[object Object]" = "[object Object]"
}

export enum FilesystemChange_ChangeType {

}

export enum ChangeType {

}

export enum ImageInspect_ContainerConfig_ExposedPorts {
  "[object Object]" = "[object Object]"
}

export enum ImageInspect_ContainerConfig_Volumes {
  "[object Object]" = "[object Object]"
}

export enum ImageInspect_ContainerConfig_ExposedPorts {
  "[object Object]" = "[object Object]"
}

export enum ImageInspect_ContainerConfig_Volumes {
  "[object Object]" = "[object Object]"
}

export enum Volume_Scope {
  "local" = "local",
  "global" = "global"
}

export enum Volume_ClusterVolume_PublishStatus_State {
  "pending-publish" = "pending-publish",
  "published" = "published",
  "pending-node-unpublish" = "pending-node-unpublish",
  "pending-controller-unpublish" = "pending-controller-unpublish"
}

export enum Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Scope {
  "single" = "single",
  "multi" = "multi"
}

export enum Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Sharing {
  "none" = "none",
  "readonly" = "readonly",
  "onewriter" = "onewriter",
  "all" = "all"
}

export enum Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum VolumeCreateOptions_ClusterVolumeSpec_AccessMode_Scope {
  "single" = "single",
  "multi" = "multi"
}

export enum VolumeCreateOptions_ClusterVolumeSpec_AccessMode_Sharing {
  "none" = "none",
  "readonly" = "readonly",
  "onewriter" = "onewriter",
  "all" = "all"
}

export enum VolumeCreateOptions_ClusterVolumeSpec_AccessMode_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum VolumeListResponse_Volume_Scope {
  "local" = "local",
  "global" = "global"
}

export enum VolumeListResponse_Volume_ClusterVolume_PublishStatus_State {
  "pending-publish" = "pending-publish",
  "published" = "published",
  "pending-node-unpublish" = "pending-node-unpublish",
  "pending-controller-unpublish" = "pending-controller-unpublish"
}

export enum VolumeListResponse_Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Scope {
  "single" = "single",
  "multi" = "multi"
}

export enum VolumeListResponse_Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Sharing {
  "none" = "none",
  "readonly" = "readonly",
  "onewriter" = "onewriter",
  "all" = "all"
}

export enum VolumeListResponse_Volume_ClusterVolume_ClusterVolumeSpec_AccessMode_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum BuildCache_Type {
  "internal" = "internal",
  "frontend" = "frontend",
  "source.local" = "source.local",
  "source.git.checkout" = "source.git.checkout",
  "exec.cachemount" = "exec.cachemount",
  "regular" = "regular"
}

export enum Plugin_Config_Interface_ProtocolScheme {
  "" = "",
  "moby.plugins.http/v1" = "moby.plugins.http/v1"
}

export enum NodeSpec_Role {
  "worker" = "worker",
  "manager" = "manager"
}

export enum NodeSpec_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum Node_NodeSpec_Role {
  "worker" = "worker",
  "manager" = "manager"
}

export enum Node_NodeSpec_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum Node_NodeStatus_NodeState {
  "unknown" = "unknown",
  "down" = "down",
  "ready" = "ready",
  "disconnected" = "disconnected"
}

export enum Node_ManagerStatus_Reachability {
  "unknown" = "unknown",
  "unreachable" = "unreachable",
  "reachable" = "reachable"
}

export enum NodeStatus_NodeState {
  "unknown" = "unknown",
  "down" = "down",
  "ready" = "ready",
  "disconnected" = "disconnected"
}

export enum NodeState {
  "unknown" = "unknown",
  "down" = "down",
  "ready" = "ready",
  "disconnected" = "disconnected"
}

export enum ManagerStatus_Reachability {
  "unknown" = "unknown",
  "unreachable" = "unreachable",
  "reachable" = "reachable"
}

export enum Reachability {
  "unknown" = "unknown",
  "unreachable" = "unreachable",
  "reachable" = "reachable"
}

export enum SwarmSpec_CAConfig_ExternalCAs_Protocol {
  "cfssl" = "cfssl"
}

export enum ClusterInfo_SwarmSpec_CAConfig_ExternalCAs_Protocol {
  "cfssl" = "cfssl"
}

export enum TaskSpec_ContainerSpec_Privileges_Seccomp_Mode {
  "default" = "default",
  "unconfined" = "unconfined",
  "custom" = "custom"
}

export enum TaskSpec_ContainerSpec_Privileges_AppArmor_Mode {
  "default" = "default",
  "disabled" = "disabled"
}

export enum TaskSpec_ContainerSpec_Isolation {
  "default" = "default",
  "process" = "process",
  "hyperv" = "hyperv"
}

export enum TaskSpec_RestartPolicy_Condition {
  "none" = "none",
  "on-failure" = "on-failure",
  "any" = "any"
}

export enum TaskSpec_Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum TaskSpec_Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum TaskState {
  "new" = "new",
  "allocated" = "allocated",
  "pending" = "pending",
  "assigned" = "assigned",
  "accepted" = "accepted",
  "preparing" = "preparing",
  "ready" = "ready",
  "starting" = "starting",
  "running" = "running",
  "complete" = "complete",
  "shutdown" = "shutdown",
  "failed" = "failed",
  "rejected" = "rejected",
  "remove" = "remove",
  "orphaned" = "orphaned"
}

export enum PortStatus_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum PortStatus_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum TaskStatus_TaskState {
  "new" = "new",
  "allocated" = "allocated",
  "pending" = "pending",
  "assigned" = "assigned",
  "accepted" = "accepted",
  "preparing" = "preparing",
  "ready" = "ready",
  "starting" = "starting",
  "running" = "running",
  "complete" = "complete",
  "shutdown" = "shutdown",
  "failed" = "failed",
  "rejected" = "rejected",
  "remove" = "remove",
  "orphaned" = "orphaned"
}

export enum TaskStatus_PortStatus_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum TaskStatus_PortStatus_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum Task_TaskSpec_ContainerSpec_Privileges_Seccomp_Mode {
  "default" = "default",
  "unconfined" = "unconfined",
  "custom" = "custom"
}

export enum Task_TaskSpec_ContainerSpec_Privileges_AppArmor_Mode {
  "default" = "default",
  "disabled" = "disabled"
}

export enum Task_TaskSpec_ContainerSpec_Isolation {
  "default" = "default",
  "process" = "process",
  "hyperv" = "hyperv"
}

export enum Task_TaskSpec_RestartPolicy_Condition {
  "none" = "none",
  "on-failure" = "on-failure",
  "any" = "any"
}

export enum Task_TaskSpec_Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum Task_TaskSpec_Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum Task_TaskStatus_TaskState {
  "new" = "new",
  "allocated" = "allocated",
  "pending" = "pending",
  "assigned" = "assigned",
  "accepted" = "accepted",
  "preparing" = "preparing",
  "ready" = "ready",
  "starting" = "starting",
  "running" = "running",
  "complete" = "complete",
  "shutdown" = "shutdown",
  "failed" = "failed",
  "rejected" = "rejected",
  "remove" = "remove",
  "orphaned" = "orphaned"
}

export enum Task_TaskStatus_PortStatus_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum Task_TaskStatus_PortStatus_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum Task_TaskState {
  "new" = "new",
  "allocated" = "allocated",
  "pending" = "pending",
  "assigned" = "assigned",
  "accepted" = "accepted",
  "preparing" = "preparing",
  "ready" = "ready",
  "starting" = "starting",
  "running" = "running",
  "complete" = "complete",
  "shutdown" = "shutdown",
  "failed" = "failed",
  "rejected" = "rejected",
  "remove" = "remove",
  "orphaned" = "orphaned"
}

export enum ServiceSpec_UpdateConfig_FailureAction {
  "continue" = "continue",
  "pause" = "pause",
  "rollback" = "rollback"
}

export enum ServiceSpec_UpdateConfig_Order {
  "stop-first" = "stop-first",
  "start-first" = "start-first"
}

export enum ServiceSpec_RollbackConfig_FailureAction {
  "continue" = "continue",
  "pause" = "pause"
}

export enum ServiceSpec_RollbackConfig_Order {
  "stop-first" = "stop-first",
  "start-first" = "start-first"
}

export enum ServiceSpec_TaskSpec_ContainerSpec_Privileges_Seccomp_Mode {
  "default" = "default",
  "unconfined" = "unconfined",
  "custom" = "custom"
}

export enum ServiceSpec_TaskSpec_ContainerSpec_Privileges_AppArmor_Mode {
  "default" = "default",
  "disabled" = "disabled"
}

export enum ServiceSpec_TaskSpec_ContainerSpec_Isolation {
  "default" = "default",
  "process" = "process",
  "hyperv" = "hyperv"
}

export enum ServiceSpec_TaskSpec_RestartPolicy_Condition {
  "none" = "none",
  "on-failure" = "on-failure",
  "any" = "any"
}

export enum ServiceSpec_TaskSpec_Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum ServiceSpec_TaskSpec_Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum ServiceSpec_EndpointSpec_Mode {
  "vip" = "vip",
  "dnsrr" = "dnsrr"
}

export enum ServiceSpec_EndpointSpec_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum ServiceSpec_EndpointSpec_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum EndpointSpec_Mode {
  "vip" = "vip",
  "dnsrr" = "dnsrr"
}

export enum EndpointSpec_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum EndpointSpec_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum Service_UpdateStatus_State {
  "updating" = "updating",
  "paused" = "paused",
  "completed" = "completed"
}

export enum Service_ServiceSpec_UpdateConfig_FailureAction {
  "continue" = "continue",
  "pause" = "pause",
  "rollback" = "rollback"
}

export enum Service_ServiceSpec_UpdateConfig_Order {
  "stop-first" = "stop-first",
  "start-first" = "start-first"
}

export enum Service_ServiceSpec_RollbackConfig_FailureAction {
  "continue" = "continue",
  "pause" = "pause"
}

export enum Service_ServiceSpec_RollbackConfig_Order {
  "stop-first" = "stop-first",
  "start-first" = "start-first"
}

export enum Service_ServiceSpec_TaskSpec_ContainerSpec_Privileges_Seccomp_Mode {
  "default" = "default",
  "unconfined" = "unconfined",
  "custom" = "custom"
}

export enum Service_ServiceSpec_TaskSpec_ContainerSpec_Privileges_AppArmor_Mode {
  "default" = "default",
  "disabled" = "disabled"
}

export enum Service_ServiceSpec_TaskSpec_ContainerSpec_Isolation {
  "default" = "default",
  "process" = "process",
  "hyperv" = "hyperv"
}

export enum Service_ServiceSpec_TaskSpec_RestartPolicy_Condition {
  "none" = "none",
  "on-failure" = "on-failure",
  "any" = "any"
}

export enum Service_ServiceSpec_TaskSpec_Mount_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum Service_ServiceSpec_TaskSpec_Mount_BindOptions_Propagation {
  "private" = "private",
  "rprivate" = "rprivate",
  "shared" = "shared",
  "rshared" = "rshared",
  "slave" = "slave",
  "rslave" = "rslave"
}

export enum Service_ServiceSpec_EndpointSpec_Mode {
  "vip" = "vip",
  "dnsrr" = "dnsrr"
}

export enum Service_ServiceSpec_EndpointSpec_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum Service_ServiceSpec_EndpointSpec_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum Service_EndpointSpec_Mode {
  "vip" = "vip",
  "dnsrr" = "dnsrr"
}

export enum Service_EndpointSpec_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum Service_EndpointSpec_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum Service_EndpointPortConfig_Protocol {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum Service_EndpointPortConfig_PublishMode {
  "ingress" = "ingress",
  "host" = "host"
}

export enum ContainerSummary_Port_Type {
  "tcp" = "tcp",
  "udp" = "udp",
  "sctp" = "sctp"
}

export enum ContainerSummary_MountPoint_Type {
  "bind" = "bind",
  "volume" = "volume",
  "tmpfs" = "tmpfs",
  "npipe" = "npipe",
  "cluster" = "cluster"
}

export enum ContainerState_Status {
  "created" = "created",
  "running" = "running",
  "paused" = "paused",
  "restarting" = "restarting",
  "removing" = "removing",
  "exited" = "exited",
  "dead" = "dead"
}

export enum ContainerState_Health_Status {
  "none" = "none",
  "starting" = "starting",
  "healthy" = "healthy",
  "unhealthy" = "unhealthy"
}

export enum SystemInfo_CgroupDriver {
  "cgroupfs" = "cgroupfs",
  "systemd" = "systemd",
  "none" = "none"
}

export enum SystemInfo_CgroupVersion {
  "1" = "1",
  "2" = "2"
}

export enum SystemInfo_Isolation {
  "default" = "default",
  "hyperv" = "hyperv",
  "process" = "process"
}

export enum SystemInfo_SwarmInfo_LocalNodeState {
  "" = "",
  "inactive" = "inactive",
  "pending" = "pending",
  "active" = "active",
  "error" = "error",
  "locked" = "locked"
}

export enum SystemInfo_SwarmInfo_ClusterInfo_SwarmSpec_CAConfig_ExternalCAs_Protocol {
  "cfssl" = "cfssl"
}

export enum SwarmInfo_LocalNodeState {
  "" = "",
  "inactive" = "inactive",
  "pending" = "pending",
  "active" = "active",
  "error" = "error",
  "locked" = "locked"
}

export enum SwarmInfo_ClusterInfo_SwarmSpec_CAConfig_ExternalCAs_Protocol {
  "cfssl" = "cfssl"
}

export enum LocalNodeState {
  "" = "",
  "inactive" = "inactive",
  "pending" = "pending",
  "active" = "active",
  "error" = "error",
  "locked" = "locked"
}

export enum EventMessage_Type {
  "builder" = "builder",
  "config" = "config",
  "container" = "container",
  "daemon" = "daemon",
  "image" = "image",
  "network" = "network",
  "node" = "node",
  "plugin" = "plugin",
  "secret" = "secret",
  "service" = "service",
  "volume" = "volume"
}

export enum EventMessage_scope {
  "local" = "local",
  "swarm" = "swarm"
}

export enum ClusterVolume_PublishStatus_State {
  "pending-publish" = "pending-publish",
  "published" = "published",
  "pending-node-unpublish" = "pending-node-unpublish",
  "pending-controller-unpublish" = "pending-controller-unpublish"
}

export enum ClusterVolume_ClusterVolumeSpec_AccessMode_Scope {
  "single" = "single",
  "multi" = "multi"
}

export enum ClusterVolume_ClusterVolumeSpec_AccessMode_Sharing {
  "none" = "none",
  "readonly" = "readonly",
  "onewriter" = "onewriter",
  "all" = "all"
}

export enum ClusterVolume_ClusterVolumeSpec_AccessMode_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export enum ClusterVolumeSpec_AccessMode_Scope {
  "single" = "single",
  "multi" = "multi"
}

export enum ClusterVolumeSpec_AccessMode_Sharing {
  "none" = "none",
  "readonly" = "readonly",
  "onewriter" = "onewriter",
  "all" = "all"
}

export enum ClusterVolumeSpec_AccessMode_Availability {
  "active" = "active",
  "pause" = "pause",
  "drain" = "drain"
}

export const Port = S.struct({
  /** Host IP address that the container's port is mapped to */
  IP: S.string,
  /** Port on the container */
  PrivatePort: S.integer,
  /** Port exposed on the host */
  PublicPort: S.integer,
  /** undefined */
  Type: S.enums(undefined)
})

export const MountPoint = S.struct({
  /** Whether the mount is mounted writable (read-write).
   */
  RW: S.boolean,
  /** Name is the name reference to the underlying data defined by `Source`
  e.g., the volume name.
   */
  Name: S.string,
  /** Source location of the mount.
  
  For volumes, this contains the storage location of the volume (within
  `/var/lib/docker/volumes/`). For bind-mounts, and `npipe`, this contains
  the source (host) part of the bind-mount. For `tmpfs` mount points, this
  field is empty.
   */
  Source: S.string,
  /** Destination is the path relative to the container root (`/`) where
  the `Source` is mounted inside the container.
   */
  Destination: S.string,
  /** Driver is the volume driver used to create the volume (if it is a volume).
   */
  Driver: S.string,
  /** Mode is a comma separated list of options supplied by the user when
  creating the bind/volume mount.
  
  The default is platform-specific (`"z"` on Linux, empty on Windows).
   */
  Mode: S.string,
  /** Propagation describes how mounts are propagated from the host into the
  mount point, and vice-versa. Refer to the [Linux kernel documentation](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt)
  for details. This field is not used on Windows.
   */
  Propagation: S.string,
  /** The mount type:
  
  - `bind` a mount of a file or directory from the host into the container.
  - `volume` a docker volume with the given `Name`.
  - `tmpfs` a `tmpfs`.
  - `npipe` a named pipe from the host into the container.
  - `cluster` a Swarm cluster volume
   */
  Type: S.enums(undefined)
})

export const DeviceMapping = S.struct({
  /** a string */
  PathOnHost: S.string,
  /** a string */
  PathInContainer: S.string,
  /** a string */
  CgroupPermissions: S.string
})

export const DeviceRequest = S.struct({
  /** a string */
  Driver: S.string,
  /** an integer */
  Count: S.integer,
  /** undefined */
  DeviceIDs: S.array(S.string),
  /** A list of capabilities; an OR list of AND lists of capabilities.
   */
  Capabilities: S.array(S.array(S.string)),
  /** Driver-specific options, specified as a key/value pairs. These options
  are passed directly to the driver.
   */
  Options: S.struct({
  
  })
})

export const ThrottleDevice = S.struct({
  /** Device path */
  Path: S.string,
  /** Rate */
  Rate: S.unknown
})

export const Mount = S.struct({
  /** Whether the mount should be read-only. */
  ReadOnly: S.boolean,
  /** Container path. */
  Target: S.string,
  /** Mount source (e.g. a volume name, a host path). */
  Source: S.string,
  /** The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`. */
  Consistency: S.string,
  /** The mount type. Available types:
  
  - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container.
  - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.
  - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
  - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container.
  - `cluster` a Swarm cluster volume
   */
  Type: S.enums(undefined),
  /** Optional configuration for the `bind` type. */
  BindOptions: S.struct({
    /** Disable recursive bind mount. */
    NonRecursive: S.boolean,
    /** Create mount point on host if missing */
    CreateMountpoint: S.boolean,
    /** Make the mount non-recursively read-only, but still leave the mount recursive
    (unless NonRecursive is set to true in conjunction).
     */
    ReadOnlyNonRecursive: S.boolean,
    /** Raise an error if the mount cannot be made recursively read-only. */
    ReadOnlyForceRecursive: S.boolean,
    /** A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`. */
    Propagation: S.enums(undefined)
  }),
  /** Optional configuration for the `volume` type. */
  VolumeOptions: S.struct({
    /** Populate volume with data from the target. */
    NoCopy: S.boolean,
    /** User-defined key/value metadata. */
    Labels: S.struct({
    
    }),
    /** Map of driver specific options */
    DriverConfig: S.struct({
      /** Name of the driver to use to create the volume. */
      Name: S.string,
      /** key/value map of driver specific options. */
      Options: S.struct({
      
      })
    })
  }),
  /** Optional configuration for the `tmpfs` type. */
  TmpfsOptions: S.struct({
    /** The size for the tmpfs mount in bytes. */
    SizeBytes: S.integer,
    /** The permission mode for the tmpfs mount in an integer. */
    Mode: S.integer
  })
})

export const RestartPolicy = S.struct({
  /** - Empty string means not to restart
  - `no` Do not automatically restart
  - `always` Always restart
  - `unless-stopped` Restart always except when the user has manually stopped the container
  - `on-failure` Restart only when the container exit code is non-zero
   */
  Name: S.enums(undefined),
  /** If `on-failure` is used, the number of times to retry before giving up.
   */
  MaximumRetryCount: S.integer
})

export const Resources = S.struct({
  /** Disable OOM Killer for the container. */
  OomKillDisable: S.boolean,
  /** Run an init inside the container that forwards signals and reaps
  processes. This field is omitted if empty, and the default (as
  configured on the daemon) is used.
   */
  Init: S.boolean,
  /** Path to `cgroups` under which the container's `cgroup` is created. If
  the path is not absolute, the path is considered to be relative to the
  `cgroups` path of the init process. Cgroups are created if they do not
  already exist.
   */
  CgroupParent: S.string,
  /** CPUs in which to allow execution (e.g., `0-3`, `0,1`).
   */
  CpusetCpus: S.string,
  /** Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only
  effective on NUMA systems.
   */
  CpusetMems: S.string,
  /** An integer value representing this container's relative CPU weight
  versus other containers.
   */
  CpuShares: S.integer,
  /** Memory limit in bytes. */
  Memory: S.integer,
  /** Block IO weight (relative weight). */
  BlkioWeight: S.unknown,
  /** Block IO weight (relative device weight) in the form:
  
  ```
  [{"Path": "device_path", "Weight": weight}]
  ```
   */
  BlkioWeightDevice: S.array(S.struct({
    /** a string */
    Path: S.string,
    /** a non-negative number */
    Weight: S.unknown
  })),
  /** Limit read rate (bytes per second) from a device, in the form:
  
  ```
  [{"Path": "device_path", "Rate": rate}]
  ```
   */
  BlkioDeviceReadBps: S.array(S.suspend(() => ThrottleDevice)),
  /** Limit write rate (bytes per second) to a device, in the form:
  
  ```
  [{"Path": "device_path", "Rate": rate}]
  ```
   */
  BlkioDeviceWriteBps: S.array(S.suspend(() => ThrottleDevice)),
  /** Limit read rate (IO per second) from a device, in the form:
  
  ```
  [{"Path": "device_path", "Rate": rate}]
  ```
   */
  BlkioDeviceReadIOps: S.array(S.suspend(() => ThrottleDevice)),
  /** Limit write rate (IO per second) to a device, in the form:
  
  ```
  [{"Path": "device_path", "Rate": rate}]
  ```
   */
  BlkioDeviceWriteIOps: S.array(S.suspend(() => ThrottleDevice)),
  /** The length of a CPU period in microseconds. */
  CpuPeriod: S.integer,
  /** Microseconds of CPU time that the container can get in a CPU period.
   */
  CpuQuota: S.integer,
  /** The length of a CPU real-time period in microseconds. Set to 0 to
  allocate no time allocated to real-time tasks.
   */
  CpuRealtimePeriod: S.integer,
  /** The length of a CPU real-time runtime in microseconds. Set to 0 to
  allocate no time allocated to real-time tasks.
   */
  CpuRealtimeRuntime: S.integer,
  /** A list of devices to add to the container. */
  Devices: S.array(S.suspend(() => DeviceMapping)),
  /** a list of cgroup rules to apply to the container */
  DeviceCgroupRules: S.array(S.string),
  /** A list of requests for devices to be sent to device drivers.
   */
  DeviceRequests: S.array(S.suspend(() => DeviceRequest)),
  /** Hard limit for kernel TCP buffer memory (in bytes). Depending on the
  OCI runtime in use, this option may be ignored. It is no longer supported
  by the default (runc) runtime.
  
  This field is omitted when empty.
   */
  KernelMemoryTCP: S.integer,
  /** Memory soft limit in bytes. */
  MemoryReservation: S.integer,
  /** Total memory limit (memory + swap). Set as `-1` to enable unlimited
  swap.
   */
  MemorySwap: S.integer,
  /** Tune a container's memory swappiness behavior. Accepts an integer
  between 0 and 100.
   */
  MemorySwappiness: S.unknown,
  /** CPU quota in units of 10<sup>-9</sup> CPUs. */
  NanoCpus: S.integer,
  /** Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null`
  to not change.
   */
  PidsLimit: S.integer,
  /** A list of resource limits to set in the container. For example:
  
  ```
  {"Name": "nofile", "Soft": 1024, "Hard": 2048}
  ```
   */
  Ulimits: S.array(S.struct({
    /** Name of ulimit */
    Name: S.string,
    /** Soft limit */
    Soft: S.integer,
    /** Hard limit */
    Hard: S.integer
  })),
  /** The number of usable CPUs (Windows only).
  
  On Windows Server containers, the processor resource controls are
  mutually exclusive. The order of precedence is `CPUCount` first, then
  `CPUShares`, and `CPUPercent` last.
   */
  CpuCount: S.integer,
  /** The usable percentage of the available CPUs (Windows only).
  
  On Windows Server containers, the processor resource controls are
  mutually exclusive. The order of precedence is `CPUCount` first, then
  `CPUShares`, and `CPUPercent` last.
   */
  CpuPercent: S.integer,
  /** Maximum IOps for the container system drive (Windows only) */
  IOMaximumIOps: S.integer,
  /** Maximum IO in bytes per second for the container system drive
  (Windows only).
   */
  IOMaximumBandwidth: S.integer
})

export const Limit = S.struct({
  /** an integer */
  NanoCPUs: S.integer,
  /** an integer */
  MemoryBytes: S.integer,
  /** Limits the maximum number of PIDs in the container. Set `0` for unlimited.
   */
  Pids: S.integer
})

export const GenericResources = S.array(S.struct({
  /** undefined */
  NamedResourceSpec: S.struct({
    /** a string */
    Kind: S.string,
    /** a string */
    Value: S.string
  }),
  /** undefined */
  DiscreteResourceSpec: S.struct({
    /** a string */
    Kind: S.string,
    /** an integer */
    Value: S.integer
  })
}))

export const ResourceObject = S.struct({
  /** an integer */
  NanoCPUs: S.integer,
  /** an integer */
  MemoryBytes: S.integer,
  /** undefined */
  GenericResources: S.suspend(() => GenericResources)
})

export const HealthConfig = S.struct({
  /** The test to perform. Possible values are:
  
  - `[]` inherit healthcheck from image or parent image
  - `["NONE"]` disable healthcheck
  - `["CMD", args...]` exec arguments directly
  - `["CMD-SHELL", command]` run command with system's default shell
   */
  Test: S.array(S.string),
  /** The time to wait between checks in nanoseconds. It should be 0 or at
  least 1000000 (1 ms). 0 means inherit.
   */
  Interval: S.integer,
  /** The time to wait before considering the check to have hung. It should
  be 0 or at least 1000000 (1 ms). 0 means inherit.
   */
  Timeout: S.integer,
  /** The number of consecutive failures needed to consider a container as
  unhealthy. 0 means inherit.
   */
  Retries: S.integer,
  /** Start period for the container to initialize before starting
  health-retries countdown in nanoseconds. It should be 0 or at least
  1000000 (1 ms). 0 means inherit.
   */
  StartPeriod: S.integer,
  /** The time to wait between checks in nanoseconds during the start period.
  It should be 0 or at least 1000000 (1 ms). 0 means inherit.
   */
  StartInterval: S.integer
})

export const HealthcheckResult = S.struct({
  /** Date and time at which this check started in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  Start: S.string,
  /** Date and time at which this check ended in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  End: S.string,
  /** Output from last check */
  Output: S.string,
  /** ExitCode meanings:
  
  - `0` healthy
  - `1` unhealthy
  - `2` reserved (considered unhealthy)
  - other values: error running probe
   */
  ExitCode: S.integer
})

export const Health = S.struct({
  /** Status is one of `none`, `starting`, `healthy` or `unhealthy`
  
  - "none"      Indicates there is no healthcheck
  - "starting"  Starting indicates that the container is not yet ready
  - "healthy"   Healthy indicates that the container is running correctly
  - "unhealthy" Unhealthy indicates that the container has a problem
   */
  Status: S.enums(undefined),
  /** FailingStreak is the number of consecutive failures */
  FailingStreak: S.integer,
  /** Log contains the last few results (oldest first)
   */
  Log: S.array(S.suspend(() => HealthcheckResult))
})

export const PortBinding = S.struct({
  /** Host IP address that the container's port is mapped to. */
  HostIp: S.string,
  /** Host port number that the container's port is mapped to. */
  HostPort: S.string
})

export const PortMap = S.struct({

})

export const HostConfig = S.union(S.suspend(() => Resources), S.struct({
  /** Automatically remove the container when the container's process
  exits. This has no effect if `RestartPolicy` is set.
   */
  AutoRemove: S.boolean,
  /** Gives the container full access to the host. */
  Privileged: S.boolean,
  /** Allocates an ephemeral host port for all of a container's
  exposed ports.
  
  Ports are de-allocated when the container stops and allocated when
  the container starts. The allocated port might be changed when
  restarting the container.
  
  The port is selected from the ephemeral port range that depends on
  the kernel. For example, on Linux the range is defined by
  `/proc/sys/net/ipv4/ip_local_port_range`.
   */
  PublishAllPorts: S.boolean,
  /** Mount the container's root filesystem as read only. */
  ReadonlyRootfs: S.boolean,
  /** Path to a file where the container ID is written */
  ContainerIDFile: S.string,
  /** Network mode to use for this container. Supported standard values
  are: `bridge`, `host`, `none`, and `container:<name|id>`. Any
  other value is taken as a custom network's name to which this
  container should connect to.
   */
  NetworkMode: S.string,
  /** Driver that this container uses to mount volumes. */
  VolumeDriver: S.string,
  /** IPC sharing mode for the container. Possible values are:
  
  - `"none"`: own private IPC namespace, with /dev/shm not mounted
  - `"private"`: own private IPC namespace
  - `"shareable"`: own private IPC namespace, with a possibility to share it with other containers
  - `"container:<name|id>"`: join another (shareable) container's IPC namespace
  - `"host"`: use the host system's IPC namespace
  
  If not specified, daemon default is used, which can either be `"private"`
  or `"shareable"`, depending on daemon version and configuration.
   */
  IpcMode: S.string,
  /** Cgroup to use for the container. */
  Cgroup: S.string,
  /** Set the PID (Process) Namespace mode for the container. It can be
  either:
  
  - `"container:<name|id>"`: joins another container's PID namespace
  - `"host"`: use the host's PID namespace inside the container
   */
  PidMode: S.string,
  /** UTS namespace to use for the container. */
  UTSMode: S.string,
  /** Sets the usernamespace mode for the container when usernamespace
  remapping option is enabled.
   */
  UsernsMode: S.string,
  /** Runtime to use with this container. */
  Runtime: S.string,
  /** A list of volume bindings for this container. Each volume binding
  is a string in one of these forms:
  
  - `host-src:container-dest[:options]` to bind-mount a host path
    into the container. Both `host-src`, and `container-dest` must
    be an _absolute_ path.
  - `volume-name:container-dest[:options]` to bind-mount a volume
    managed by a volume driver into the container. `container-dest`
    must be an _absolute_ path.
  
  `options` is an optional, comma-delimited list of:
  
  - `nocopy` disables automatic copying of data from the container
    path to the volume. The `nocopy` flag only applies to named volumes.
  - `[ro|rw]` mounts a volume read-only or read-write, respectively.
    If omitted or set to `rw`, volumes are mounted read-write.
  - `[z|Z]` applies SELinux labels to allow or deny multiple containers
    to read and write to the same volume.
      - `z`: a _shared_ content label is applied to the content. This
        label indicates that multiple containers can share the volume
        content, for both reading and writing.
      - `Z`: a _private unshared_ label is applied to the content.
        This label indicates that only the current container can use
        a private volume. Labeling systems such as SELinux require
        proper labels to be placed on volume content that is mounted
        into a container. Without a label, the security system can
        prevent a container's processes from using the content. By
        default, the labels set by the host operating system are not
        modified.
  - `[[r]shared|[r]slave|[r]private]` specifies mount
    [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).
    This only applies to bind-mounted volumes, not internal volumes
    or named volumes. Mount propagation requires the source mount
    point (the location where the source directory is mounted in the
    host operating system) to have the correct propagation properties.
    For shared volumes, the source mount point must be set to `shared`.
    For slave volumes, the mount must be set to either `shared` or
    `slave`.
   */
  Binds: S.array(S.string),
  /** The logging configuration for this container */
  LogConfig: S.struct({
    /** undefined */
    Type: S.enums(undefined),
    /** undefined */
    Config: S.struct({
    
    })
  }),
  /** undefined */
  PortBindings: S.suspend(() => PortMap),
  /** undefined */
  RestartPolicy: S.suspend(() => RestartPolicy),
  /** A list of volumes to inherit from another container, specified in
  the form `<container name>[:<ro|rw>]`.
   */
  VolumesFrom: S.array(S.string),
  /** Specification for mounts to be added to the container.
   */
  Mounts: S.array(S.suspend(() => Mount)),
  /** Initial console size, as an `[height, width]` array.
   */
  ConsoleSize: S.tuple(),
  /** Arbitrary non-identifying metadata attached to container and
  provided to the runtime when the container is started.
   */
  Annotations: S.struct({
  
  }),
  /** A list of kernel capabilities to add to the container. Conflicts
  with option 'Capabilities'.
   */
  CapAdd: S.array(S.string),
  /** A list of kernel capabilities to drop from the container. Conflicts
  with option 'Capabilities'.
   */
  CapDrop: S.array(S.string),
  /** cgroup namespace mode for the container. Possible values are:
  
  - `"private"`: the container runs in its own private cgroup namespace
  - `"host"`: use the host system's cgroup namespace
  
  If not specified, the daemon default is used, which can either be `"private"`
  or `"host"`, depending on daemon version, kernel support and configuration.
   */
  CgroupnsMode: S.enums(undefined),
  /** A list of DNS servers for the container to use. */
  Dns: S.array(S.string),
  /** A list of DNS options. */
  DnsOptions: S.array(S.string),
  /** A list of DNS search domains. */
  DnsSearch: S.array(S.string),
  /** A list of hostnames/IP mappings to add to the container's `/etc/hosts`
  file. Specified in the form `["hostname:IP"]`.
   */
  ExtraHosts: S.array(S.string),
  /** A list of additional groups that the container process will run as.
   */
  GroupAdd: S.array(S.string),
  /** A list of links for the container in the form `container_name:alias`.
   */
  Links: S.array(S.string),
  /** An integer value containing the score given to the container in
  order to tune OOM killer preferences.
   */
  OomScoreAdj: S.integer,
  /** A list of string values to customize labels for MLS systems, such
  as SELinux.
   */
  SecurityOpt: S.array(S.string),
  /** Storage driver options for this container, in the form `{"size": "120G"}`.
   */
  StorageOpt: S.struct({
  
  }),
  /** A map of container directories which should be replaced by tmpfs
  mounts, and their corresponding mount options. For example:
  
  ```
  { "/run": "rw,noexec,nosuid,size=65536k" }
  ```
   */
  Tmpfs: S.struct({
  
  }),
  /** Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.
   */
  ShmSize: S.unknown,
  /** A list of kernel parameters (sysctls) to set in the container.
  For example:
  
  ```
  {"net.ipv4.ip_forward": "1"}
  ```
   */
  Sysctls: S.struct({
  
  }),
  /** Isolation technology of the container. (Windows only)
   */
  Isolation: S.enums(undefined),
  /** The list of paths to be masked inside the container (this overrides
  the default set of paths).
   */
  MaskedPaths: S.array(S.string),
  /** The list of paths to be set as read-only inside the container
  (this overrides the default set of paths).
   */
  ReadonlyPaths: S.array(S.string)
}))

export const ContainerConfig = S.struct({
  /** Whether to attach to `stdin`. */
  AttachStdin: S.boolean,
  /** Whether to attach to `stdout`. */
  AttachStdout: S.boolean,
  /** Whether to attach to `stderr`. */
  AttachStderr: S.boolean,
  /** Attach standard streams to a TTY, including `stdin` if it is not closed.
   */
  Tty: S.boolean,
  /** Open `stdin` */
  OpenStdin: S.boolean,
  /** Close `stdin` after one attached client disconnects */
  StdinOnce: S.boolean,
  /** Command is already escaped (Windows only) */
  ArgsEscaped: S.boolean,
  /** Disable networking for the container. */
  NetworkDisabled: S.boolean,
  /** The hostname to use for the container, as a valid RFC 1123 hostname.
   */
  Hostname: S.string,
  /** The domain name to use for the container.
   */
  Domainname: S.string,
  /** The user that commands are run as inside the container. */
  User: S.string,
  /** The name (or reference) of the image to use when creating the container,
  or which was used when the container was created.
   */
  Image: S.string,
  /** The working directory for commands to run in. */
  WorkingDir: S.string,
  /** MAC address of the container.
  
  Deprecated: this field is deprecated in API v1.44 and up. Use EndpointSettings.MacAddress instead.
   */
  MacAddress: S.string,
  /** Signal to stop a container as a string or unsigned integer.
   */
  StopSignal: S.string,
  /** An object mapping ports to an empty object in the form:
  
  `{"<port>/<tcp|udp|sctp>": {}}`
   */
  ExposedPorts: S.struct({
  
  }),
  /** A list of environment variables to set inside the container in the
  form `["VAR=value", ...]`. A variable without `=` is removed from the
  environment, rather than to have an empty value.
   */
  Env: S.array(S.string),
  /** Command to run specified as a string or an array of strings.
   */
  Cmd: S.array(S.string),
  /** undefined */
  Healthcheck: S.suspend(() => HealthConfig),
  /** An object mapping mount point paths inside the container to empty
  objects.
   */
  Volumes: S.struct({
  
  }),
  /** The entry point for the container as a string or an array of strings.
  
  If the array consists of exactly one empty string (`[""]`) then the
  entry point is reset to system default (i.e., the entry point used by
  docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).
   */
  Entrypoint: S.array(S.string),
  /** `ONBUILD` metadata that were defined in the image's `Dockerfile`.
   */
  OnBuild: S.array(S.string),
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Timeout to stop a container in seconds. */
  StopTimeout: S.integer,
  /** Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
   */
  Shell: S.array(S.string)
})

export const EndpointIPAMConfig = S.struct({
  /** a string */
  IPv4Address: S.string,
  /** a string */
  IPv6Address: S.string,
  /** undefined */
  LinkLocalIPs: S.array(S.string)
})

export const EndpointSettings = S.struct({
  /** MAC address for the endpoint on this network. The network driver might ignore this parameter.
   */
  MacAddress: S.string,
  /** Unique ID of the network.
   */
  NetworkID: S.string,
  /** Unique ID for the service endpoint in a Sandbox.
   */
  EndpointID: S.string,
  /** Gateway address for this network.
   */
  Gateway: S.string,
  /** IPv4 address.
   */
  IPAddress: S.string,
  /** IPv6 gateway address.
   */
  IPv6Gateway: S.string,
  /** Global IPv6 address.
   */
  GlobalIPv6Address: S.string,
  /** undefined */
  IPAMConfig: S.suspend(() => EndpointIPAMConfig),
  /** undefined */
  Links: S.array(S.string),
  /** undefined */
  Aliases: S.array(S.string),
  /** Mask length of the IPv4 address.
   */
  IPPrefixLen: S.integer,
  /** Mask length of the global IPv6 address.
   */
  GlobalIPv6PrefixLen: S.integer,
  /** DriverOpts is a mapping of driver options and values. These options
  are passed directly to the driver and are driver specific.
   */
  DriverOpts: S.struct({
  
  }),
  /** List of all DNS names an endpoint has on a specific network. This
  list is based on the container name, network aliases, container short
  ID, and hostname.
  
  These DNS names are non-fully qualified but can contain several dots.
  You can get fully qualified DNS names by appending `.<network-name>`.
  For instance, if container name is `my.ctr` and the network is named
  `testnet`, `DNSNames` will contain `my.ctr` and the FQDN will be
  `my.ctr.testnet`.
   */
  DNSNames: S.array(S.string)
})

export const NetworkingConfig = S.struct({
  /** A mapping of network name to endpoint configuration for that network.
  The endpoint configuration can be left empty to connect to that
  network with no particular endpoint configuration.
   */
  EndpointsConfig: S.struct({
  
  })
})

export const Address = S.struct({
  /** IP address. */
  Addr: S.string,
  /** Mask length of the IP address. */
  PrefixLen: S.integer
})

export const NetworkSettings = S.struct({
  /** Indicates if hairpin NAT should be enabled on the virtual interface.
  
  Deprecated: This field is never set and will be removed in a future release.
   */
  HairpinMode: S.boolean,
  /** Name of the default bridge interface when dockerd's --bridge flag is set.
   */
  Bridge: S.string,
  /** SandboxID uniquely represents a container's network stack. */
  SandboxID: S.string,
  /** IPv6 unicast address using the link-local prefix.
  
  Deprecated: This field is never set and will be removed in a future release.
   */
  LinkLocalIPv6Address: S.string,
  /** SandboxKey is the full path of the netns handle */
  SandboxKey: S.string,
  /** EndpointID uniquely represents a service endpoint in a Sandbox.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  EndpointID: S.string,
  /** Gateway address for the default "bridge" network.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  Gateway: S.string,
  /** Global IPv6 address for the default "bridge" network.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  GlobalIPv6Address: S.string,
  /** IPv4 address for the default "bridge" network.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  IPAddress: S.string,
  /** IPv6 gateway address for this network.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  IPv6Gateway: S.string,
  /** MAC address for the container on the default "bridge" network.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  MacAddress: S.string,
  /** Prefix length of the IPv6 unicast address.
  
  Deprecated: This field is never set and will be removed in a future release.
   */
  LinkLocalIPv6PrefixLen: S.integer,
  /** undefined */
  Ports: S.suspend(() => PortMap),
  /** Deprecated: This field is never set and will be removed in a future release. */
  SecondaryIPAddresses: S.array(S.suspend(() => Address)),
  /** Deprecated: This field is never set and will be removed in a future release. */
  SecondaryIPv6Addresses: S.array(S.suspend(() => Address)),
  /** Mask length of the global IPv6 address.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  GlobalIPv6PrefixLen: S.integer,
  /** Mask length of the IPv4 address.
  
  <p><br /></p>
  
  > **Deprecated**: This field is only propagated when attached to the
  > default "bridge" network. Use the information from the "bridge"
  > network inside the `Networks` map instead, which contains the same
  > information. This field was deprecated in Docker 1.9 and is scheduled
  > to be removed in Docker 17.12.0
   */
  IPPrefixLen: S.integer,
  /** Information about all networks that the container is connected to.
   */
  Networks: S.struct({
  
  })
})

export const GraphDriverData = S.struct({
  /** Name of the storage driver. */
  Name: S.string,
  /** Low-level storage metadata, provided as key/value pairs.
  
  This information is driver-specific, and depends on the storage-driver
  in use, and should be used for informational purposes only.
   */
  Data: S.struct({
  
  })
})

export const ChangeType = S.enums(undefined)

export const FilesystemChange = S.struct({
  /** Path to file or directory that has changed.
   */
  Path: S.string,
  /** undefined */
  Kind: S.suspend(() => ChangeType)
})

export const ImageInspect = S.struct({
  /** ID is the content-addressable ID of an image.
  
  This identifier is a content-addressable digest calculated from the
  image's configuration (which includes the digests of layers used by
  the image).
  
  Note that this digest differs from the `RepoDigests` below, which
  holds digests of image manifests that reference the image.
   */
  Id: S.string,
  /** ID of the parent image.
  
  Depending on how the image was created, this field may be empty and
  is only set for images that were built/created locally. This field
  is empty if the image was pulled from an image registry.
   */
  Parent: S.string,
  /** Optional message that was set when committing or importing the image.
   */
  Comment: S.string,
  /** Date and time at which the image was created, formatted in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  Created: S.string,
  /** The ID of the container that was used to create the image.
  
  Depending on how the image was created, this field may be empty.
  
  **Deprecated**: this field is kept for backward compatibility, but
  will be removed in API v1.45.
   */
  Container: S.string,
  /** The version of Docker that was used to build the image.
  
  Depending on how the image was created, this field may be empty.
   */
  DockerVersion: S.string,
  /** Name of the author that was specified when committing the image, or as
  specified through MAINTAINER (deprecated) in the Dockerfile.
   */
  Author: S.string,
  /** Hardware CPU architecture that the image runs on.
   */
  Architecture: S.string,
  /** CPU architecture variant (presently ARM-only).
   */
  Variant: S.string,
  /** Operating System the image is built to run on.
   */
  Os: S.string,
  /** Operating System version the image is built to run on (especially
  for Windows).
   */
  OsVersion: S.string,
  /** List of image names/tags in the local image cache that reference this
  image.
  
  Multiple image tags can refer to the same image, and this list may be
  empty if no tags reference the image, in which case the image is
  "untagged", in which case it can still be referenced by its ID.
   */
  RepoTags: S.array(S.string),
  /** List of content-addressable digests of locally available image manifests
  that the image is referenced from. Multiple manifests can refer to the
  same image.
  
  These digests are usually only available if the image was either pulled
  from a registry, or if the image was pushed to a registry, which is when
  the manifest is generated and its digest calculated.
   */
  RepoDigests: S.array(S.string),
  /** **Deprecated**: this field is kept for backward compatibility, but
  will be removed in API v1.45.
   */
  ContainerConfig: S.suspend(() => ContainerConfig),
  /** undefined */
  Config: S.suspend(() => ContainerConfig),
  /** Total size of the image including all layers it is composed of.
   */
  Size: S.integer,
  /** Total size of the image including all layers it is composed of.
  
  Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
   */
  VirtualSize: S.integer,
  /** undefined */
  GraphDriver: S.suspend(() => GraphDriverData),
  /** Information about the image's RootFS, including the layer IDs.
   */
  RootFS: S.struct({
    /** a string */
    Type: S.string,
    /** undefined */
    Layers: S.array(S.string)
  }),
  /** Additional metadata of the image in the local cache. This information
  is local to the daemon, and not part of the image itself.
   */
  Metadata: S.struct({
    /** Date and time at which the image was last tagged in
    [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
    
    This information is only available if the image was tagged locally,
    and omitted otherwise.
     */
    LastTagTime: S.string
  })
})

export const ImageSummary = S.struct({
  /** ID is the content-addressable ID of an image.
  
  This identifier is a content-addressable digest calculated from the
  image's configuration (which includes the digests of layers used by
  the image).
  
  Note that this digest differs from the `RepoDigests` below, which
  holds digests of image manifests that reference the image.
   */
  Id: S.string,
  /** ID of the parent image.
  
  Depending on how the image was created, this field may be empty and
  is only set for images that were built/created locally. This field
  is empty if the image was pulled from an image registry.
   */
  ParentId: S.string,
  /** List of image names/tags in the local image cache that reference this
  image.
  
  Multiple image tags can refer to the same image, and this list may be
  empty if no tags reference the image, in which case the image is
  "untagged", in which case it can still be referenced by its ID.
   */
  RepoTags: S.array(S.string),
  /** List of content-addressable digests of locally available image manifests
  that the image is referenced from. Multiple manifests can refer to the
  same image.
  
  These digests are usually only available if the image was either pulled
  from a registry, or if the image was pushed to a registry, which is when
  the manifest is generated and its digest calculated.
   */
  RepoDigests: S.array(S.string),
  /** Date and time at which the image was created as a Unix timestamp
  (number of seconds sinds EPOCH).
   */
  Created: S.integer,
  /** Total size of the image including all layers it is composed of.
   */
  Size: S.integer,
  /** Total size of image layers that are shared between this image and other
  images.
  
  This size is not calculated by default. `-1` indicates that the value
  has not been set / calculated.
   */
  SharedSize: S.integer,
  /** Total size of the image including all layers it is composed of.
  
  Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead. */
  VirtualSize: S.integer,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Number of containers using this image. Includes both stopped and running
  containers.
  
  This size is not calculated by default, and depends on which API endpoint
  is used. `-1` indicates that the value has not been set / calculated.
   */
  Containers: S.integer
})

export const AuthConfig = S.struct({
  /** a string */
  username: S.string,
  /** a string */
  password: S.string,
  /** a string */
  email: S.string,
  /** a string */
  serveraddress: S.string
})

export const ProcessConfig = S.struct({
  /** a boolean */
  privileged: S.boolean,
  /** a boolean */
  tty: S.boolean,
  /** a string */
  user: S.string,
  /** a string */
  entrypoint: S.string,
  /** undefined */
  arguments: S.array(S.string)
})

export const ObjectVersion = S.struct({
  /** an integer */
  Index: S.integer
})

export const Topology = S.struct({

})

export const ClusterVolumeSpec = S.struct({
  /** Group defines the volume group of this volume. Volumes belonging to
  the same group can be referred to by group name when creating
  Services.  Referring to a volume by group instructs Swarm to treat
  volumes in that group interchangeably for the purpose of scheduling.
  Volumes with an empty string for a group technically all belong to
  the same, emptystring group.
   */
  Group: S.string,
  /** Defines how the volume is used by tasks.
   */
  AccessMode: S.struct({
    /** The set of nodes this volume can be used on at one time.
    - `single` The volume may only be scheduled to one node at a time.
    - `multi` the volume may be scheduled to any supported number of nodes at a time.
     */
    Scope: S.enums(undefined),
    /** The number and way that different tasks can use this volume
    at one time.
    - `none` The volume may only be used by one task at a time.
    - `readonly` The volume may be used by any number of tasks, but they all must mount the volume as readonly
    - `onewriter` The volume may be used by any number of tasks, but only one may mount it as read/write.
    - `all` The volume may have any number of readers and writers.
     */
    Sharing: S.enums(undefined),
    /** Options for using this volume as a Mount-type volume.
    
        Either MountVolume or BlockVolume, but not both, must be
        present.
      properties:
        FsType:
          type: "string"
          description: |
            Specifies the filesystem type for the mount volume.
            Optional.
        MountFlags:
          type: "array"
          description: |
            Flags to pass when mounting the volume. Optional.
          items:
            type: "string"
    BlockVolume:
      type: "object"
      description: |
        Options for using this volume as a Block-type volume.
        Intentionally empty.
     */
    MountVolume: S.struct({
    
    }),
    /** Swarm Secrets that are passed to the CSI storage plugin when
    operating on this volume.
     */
    Secrets: S.array(S.struct({
      /** Key is the name of the key of the key-value pair passed to
      the plugin.
       */
      Key: S.string,
      /** Secret is the swarm Secret object from which to read data.
      This can be a Secret name or ID. The Secret data is
      retrieved by swarm and used as the value of the key-value
      pair passed to the plugin.
       */
      Secret: S.string
    })),
    /** Requirements for the accessible topology of the volume. These
    fields are optional. For an in-depth description of what these
    fields mean, see the CSI specification.
     */
    AccessibilityRequirements: S.struct({
      /** A list of required topologies, at least one of which the
      volume must be accessible from.
       */
      Requisite: S.array(S.suspend(() => Topology)),
      /** A list of topologies that the volume should attempt to be
      provisioned in.
       */
      Preferred: S.array(S.suspend(() => Topology))
    }),
    /** The desired capacity that the volume should be created with. If
    empty, the plugin will decide the capacity.
     */
    CapacityRange: S.struct({
      /** The volume must be at least this big. The value of 0
      indicates an unspecified minimum
       */
      RequiredBytes: S.integer,
      /** The volume must not be bigger than this. The value of 0
      indicates an unspecified maximum.
       */
      LimitBytes: S.integer
    }),
    /** The availability of the volume for use in tasks.
    - `active` The volume is fully available for scheduling on the cluster
    - `pause` No new workloads should use the volume, but existing workloads are not stopped.
    - `drain` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
     */
    Availability: S.enums(undefined)
  })
})

export const ClusterVolume = S.struct({
  /** The Swarm ID of this volume. Because cluster volumes are Swarm
  objects, they have an ID, unlike non-cluster volumes. This ID can
  be used to refer to the Volume instead of the name.
   */
  ID: S.string,
  /** a string */
  CreatedAt: S.string,
  /** a string */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => ClusterVolumeSpec),
  /** Information about the global status of the volume.
   */
  Info: S.struct({
    /** The ID of the volume as returned by the CSI storage plugin. This
    is distinct from the volume's ID as provided by Docker. This ID
    is never used by the user when communicating with Docker to refer
    to this volume. If the ID is blank, then the Volume has not been
    successfully created in the plugin yet.
     */
    VolumeID: S.string,
    /** The capacity of the volume in bytes. A value of 0 indicates that
    the capacity is unknown.
     */
    CapacityBytes: S.integer,
    /** A map of strings to strings returned from the storage plugin when
    the volume is created.
     */
    VolumeContext: S.struct({
    
    }),
    /** The topology this volume is actually accessible from.
     */
    AccessibleTopology: S.array(S.suspend(() => Topology))
  }),
  /** The status of the volume as it pertains to its publishing and use on
  specific nodes
   */
  PublishStatus: S.array(S.struct({
    /** The ID of the Swarm node the volume is published on.
     */
    NodeID: S.string,
    /** The published state of the volume.
    * `pending-publish` The volume should be published to this node, but the call to the controller plugin to do so has not yet been successfully completed.
    * `published` The volume is published successfully to the node.
    * `pending-node-unpublish` The volume should be unpublished from the node, and the manager is awaiting confirmation from the worker that it has done so.
    * `pending-controller-unpublish` The volume is successfully unpublished from the node, but has not yet been successfully unpublished on the controller.
     */
    State: S.enums(undefined),
    /** A map of strings to strings returned by the CSI controller
    plugin when a volume is published.
     */
    PublishContext: S.struct({
    
    })
  }))
})

export const Volume = S.struct({
  /** Name of the volume. */
  Name: S.string,
  /** Name of the volume driver used by the volume. */
  Driver: S.string,
  /** Mount path of the volume on the host. */
  Mountpoint: S.string,
  /** Date/Time the volume was created. */
  CreatedAt: S.string,
  /** Low-level details about the volume, provided by the volume driver.
  Details are returned as a map with key/value pairs:
  `{"key":"value","key2":"value2"}`.
  
  The `Status` field is optional, and is omitted if the volume driver
  does not support this feature.
   */
  Status: S.struct({
  
  }),
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** The level at which the volume exists. Either `global` for cluster-wide,
  or `local` for machine level.
   */
  Scope: S.enums(undefined),
  /** undefined */
  ClusterVolume: S.suspend(() => ClusterVolume),
  /** The driver specific options used when creating the volume.
   */
  Options: S.struct({
  
  }),
  /** Usage details about the volume. This information is used by the
  `GET /system/df` endpoint, and omitted in other endpoints.
   */
  UsageData: S.struct({
    /** Amount of disk space used by the volume (in bytes). This information
    is only available for volumes created with the `"local"` volume
    driver. For volumes created with other volume drivers, this field
    is set to `-1` ("not available")
     */
    Size: S.integer,
    /** The number of containers referencing this volume. This field
    is set to `-1` if the reference-count is not available.
     */
    RefCount: S.integer
  })
})

export const VolumeCreateOptions = S.struct({
  /** The new volume's name. If not specified, Docker generates a name.
   */
  Name: S.string,
  /** Name of the volume driver to use. */
  Driver: S.string,
  /** A mapping of driver options and values. These options are
  passed directly to the driver and are driver specific.
   */
  DriverOpts: S.struct({
  
  }),
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** undefined */
  ClusterVolumeSpec: S.suspend(() => ClusterVolumeSpec)
})

export const VolumeListResponse = S.struct({
  /** List of volumes */
  Volumes: S.array(S.suspend(() => Volume)),
  /** Warnings that occurred when fetching the list of volumes.
   */
  Warnings: S.array(S.string)
})

export const IPAMConfig = S.struct({
  /** a string */
  Subnet: S.string,
  /** a string */
  IPRange: S.string,
  /** a string */
  Gateway: S.string,
  /** undefined */
  AuxiliaryAddresses: S.struct({
  
  })
})

export const IPAM = S.struct({
  /** Name of the IPAM driver to use. */
  Driver: S.string,
  /** List of IPAM configuration options, specified as a map:
  
  ```
  {"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}
  ```
   */
  Config: S.array(S.suspend(() => IPAMConfig)),
  /** Driver-specific options, specified as a map. */
  Options: S.struct({
  
  })
})

export const NetworkContainer = S.struct({
  /** a string */
  Name: S.string,
  /** a string */
  EndpointID: S.string,
  /** a string */
  MacAddress: S.string,
  /** a string */
  IPv4Address: S.string,
  /** a string */
  IPv6Address: S.string
})

export const Network = S.struct({
  /** a boolean */
  EnableIPv6: S.boolean,
  /** a boolean */
  Internal: S.boolean,
  /** a boolean */
  Attachable: S.boolean,
  /** a boolean */
  Ingress: S.boolean,
  /** a string */
  Name: S.string,
  /** a string */
  Id: S.string,
  /** a string */
  Created: S.string,
  /** a string */
  Scope: S.string,
  /** a string */
  Driver: S.string,
  /** undefined */
  IPAM: S.suspend(() => IPAM),
  /** undefined */
  Containers: S.struct({
  
  }),
  /** undefined */
  Options: S.struct({
  
  }),
  /** undefined */
  Labels: S.struct({
  
  })
})

export const ErrorDetail = S.struct({
  /** a string */
  message: S.string,
  /** an integer */
  code: S.integer
})

export const ProgressDetail = S.struct({
  /** an integer */
  current: S.integer,
  /** an integer */
  total: S.integer
})

export const ImageID = S.struct({
  /** a string */
  ID: S.string
})

export const BuildInfo = S.struct({
  /** a string */
  id: S.string,
  /** a string */
  stream: S.string,
  /** a string */
  error: S.string,
  /** a string */
  status: S.string,
  /** a string */
  progress: S.string,
  /** undefined */
  errorDetail: S.suspend(() => ErrorDetail),
  /** undefined */
  progressDetail: S.suspend(() => ProgressDetail),
  /** undefined */
  aux: S.suspend(() => ImageID)
})

export const BuildCache = S.struct({
  /** Indicates if the build cache is in use.
   */
  InUse: S.boolean,
  /** Indicates if the build cache is shared.
   */
  Shared: S.boolean,
  /** Unique ID of the build cache record.
   */
  ID: S.string,
  /** ID of the parent build cache record.
  
  > **Deprecated**: This field is deprecated, and omitted if empty.
   */
  Parent: S.string,
  /** Description of the build-step that produced the build cache.
   */
  Description: S.string,
  /** Date and time at which the build cache was created in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  CreatedAt: S.string,
  /** Date and time at which the build cache was last used in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  LastUsedAt: S.string,
  /** List of parent build cache record IDs.
   */
  Parents: S.array(S.string),
  /** Cache record type.
   */
  Type: S.enums(undefined),
  /** Amount of disk space used by the build cache (in bytes).
   */
  Size: S.integer,
  /** an integer */
  UsageCount: S.integer
})

export const CreateImageInfo = S.struct({
  /** a string */
  id: S.string,
  /** a string */
  error: S.string,
  /** a string */
  status: S.string,
  /** a string */
  progress: S.string,
  /** undefined */
  errorDetail: S.suspend(() => ErrorDetail),
  /** undefined */
  progressDetail: S.suspend(() => ProgressDetail)
})

export const PushImageInfo = S.struct({
  /** a string */
  error: S.string,
  /** a string */
  status: S.string,
  /** a string */
  progress: S.string,
  /** undefined */
  progressDetail: S.suspend(() => ProgressDetail)
})

export const ErrorResponse = S.struct({
  /** The error message. */
  message: S.string
})

export const IdResponse = S.struct({
  /** The id of the newly created object. */
  Id: S.string
})

export const PluginMount = S.struct({
  /** a string */
  Name: S.string,
  /** a string */
  Description: S.string,
  /** a string */
  Source: S.string,
  /** a string */
  Destination: S.string,
  /** a string */
  Type: S.string,
  /** undefined */
  Settable: S.array(S.string),
  /** undefined */
  Options: S.array(S.string)
})

export const PluginDevice = S.struct({
  /** a string */
  Name: S.string,
  /** a string */
  Description: S.string,
  /** a string */
  Path: S.string,
  /** undefined */
  Settable: S.array(S.string)
})

export const PluginEnv = S.struct({
  /** a string */
  Name: S.string,
  /** a string */
  Description: S.string,
  /** a string */
  Value: S.string,
  /** undefined */
  Settable: S.array(S.string)
})

export const PluginInterfaceType = S.struct({
  /** a string */
  Prefix: S.string,
  /** a string */
  Capability: S.string,
  /** a string */
  Version: S.string
})

export const PluginPrivilege = S.struct({
  /** a string */
  Name: S.string,
  /** a string */
  Description: S.string,
  /** undefined */
  Value: S.array(S.string)
})

export const Plugin = S.struct({
  /** True if the plugin is running. False if the plugin is not running, only installed. */
  Enabled: S.boolean,
  /** a string */
  Id: S.string,
  /** a string */
  Name: S.string,
  /** plugin remote reference used to push/pull the plugin */
  PluginReference: S.string,
  /** Settings that can be modified by users. */
  Settings: S.struct({
    /** undefined */
    Mounts: S.array(S.suspend(() => PluginMount)),
    /** undefined */
    Env: S.array(S.string),
    /** undefined */
    Args: S.array(S.string),
    /** undefined */
    Devices: S.array(S.suspend(() => PluginDevice))
  }),
  /** The config of a plugin. */
  Config: S.struct({
    /** a boolean */
    IpcHost: S.boolean,
    /** a boolean */
    PidHost: S.boolean,
    /** Docker Version used to create the plugin */
    DockerVersion: S.string,
    /** a string */
    Description: S.string,
    /** a string */
    Documentation: S.string,
    /** a string */
    WorkDir: S.string,
    /** a string */
    PropagatedMount: S.string,
    /** The interface between Docker and the plugin */
    Interface: S.struct({
      /** a string */
      Socket: S.string,
      /** undefined */
      Types: S.array(S.suspend(() => PluginInterfaceType)),
      /** Protocol to use for clients connecting to the plugin. */
      ProtocolScheme: S.enums(undefined)
    }),
    /** undefined */
    Entrypoint: S.array(S.string),
    /** undefined */
    User: S.struct({
      /** an integer */
      UID: S.integer,
      /** an integer */
      GID: S.integer
    }),
    /** undefined */
    Network: S.struct({
      /** a string */
      Type: S.string
    }),
    /** undefined */
    Linux: S.struct({
      /** a boolean */
      AllowAllDevices: S.boolean,
      /** undefined */
      Capabilities: S.array(S.string),
      /** undefined */
      Devices: S.array(S.suspend(() => PluginDevice))
    }),
    /** undefined */
    Mounts: S.array(S.suspend(() => PluginMount)),
    /** undefined */
    Env: S.array(S.suspend(() => PluginEnv)),
    /** undefined */
    Args: S.struct({
      /** a string */
      Name: S.string,
      /** a string */
      Description: S.string,
      /** undefined */
      Settable: S.array(S.string),
      /** undefined */
      Value: S.array(S.string)
    }),
    /** undefined */
    rootfs: S.struct({
      /** a string */
      type: S.string,
      /** undefined */
      diff_ids: S.array(S.string)
    })
  })
})

export const NodeSpec = S.struct({
  /** Name for the node. */
  Name: S.string,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Role of the node. */
  Role: S.enums(undefined),
  /** Availability of the node. */
  Availability: S.enums(undefined)
})

export const Platform = S.struct({
  /** Architecture represents the hardware architecture (for example,
  `x86_64`).
   */
  Architecture: S.string,
  /** OS represents the Operating System (for example, `linux` or `windows`).
   */
  OS: S.string
})

export const EngineDescription = S.struct({
  /** a string */
  EngineVersion: S.string,
  /** undefined */
  Labels: S.struct({
  
  }),
  /** undefined */
  Plugins: S.array(S.struct({
    /** a string */
    Type: S.string,
    /** a string */
    Name: S.string
  }))
})

export const TLSInfo = S.struct({
  /** The root CA certificate(s) that are used to validate leaf TLS
  certificates.
   */
  TrustRoot: S.string,
  /** The base64-url-safe-encoded raw subject bytes of the issuer. */
  CertIssuerSubject: S.string,
  /** The base64-url-safe-encoded raw public key bytes of the issuer.
   */
  CertIssuerPublicKey: S.string
})

export const NodeDescription = S.struct({
  /** a string */
  Hostname: S.string,
  /** undefined */
  Platform: S.suspend(() => Platform),
  /** undefined */
  Resources: S.suspend(() => ResourceObject),
  /** undefined */
  Engine: S.suspend(() => EngineDescription),
  /** undefined */
  TLSInfo: S.suspend(() => TLSInfo)
})

export const NodeState = S.enums(undefined)

export const NodeStatus = S.struct({
  /** a string */
  Message: S.string,
  /** IP address of the node. */
  Addr: S.string,
  /** undefined */
  State: S.suspend(() => NodeState)
})

export const Reachability = S.enums(undefined)

export const ManagerStatus = S.struct({
  /** a boolean */
  Leader: S.boolean,
  /** The IP address and port at which the manager is reachable.
   */
  Addr: S.string,
  /** undefined */
  Reachability: S.suspend(() => Reachability)
})

export const Node = S.struct({
  /** a string */
  ID: S.string,
  /** Date and time at which the node was added to the swarm in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  CreatedAt: S.string,
  /** Date and time at which the node was last updated in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => NodeSpec),
  /** undefined */
  Description: S.suspend(() => NodeDescription),
  /** undefined */
  Status: S.suspend(() => NodeStatus),
  /** undefined */
  ManagerStatus: S.suspend(() => ManagerStatus)
})

export const SwarmSpec = S.struct({
  /** Name of the swarm. */
  Name: S.string,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Orchestration configuration. */
  Orchestration: S.struct({
    /** The number of historic tasks to keep per instance or node. If
    negative, never remove completed or failed tasks.
     */
    TaskHistoryRetentionLimit: S.integer
  }),
  /** Raft configuration. */
  Raft: S.struct({
    /** The number of log entries between snapshots. */
    SnapshotInterval: S.integer,
    /** The number of snapshots to keep beyond the current snapshot.
     */
    KeepOldSnapshots: S.integer,
    /** The number of log entries to keep around to sync up slow followers
    after a snapshot is created.
     */
    LogEntriesForSlowFollowers: S.integer,
    /** The number of ticks that a follower will wait for a message from
    the leader before becoming a candidate and starting an election.
    `ElectionTick` must be greater than `HeartbeatTick`.
    
    A tick currently defaults to one second, so these translate
    directly to seconds currently, but this is NOT guaranteed.
     */
    ElectionTick: S.integer,
    /** The number of ticks between heartbeats. Every HeartbeatTick ticks,
    the leader will send a heartbeat to the followers.
    
    A tick currently defaults to one second, so these translate
    directly to seconds currently, but this is NOT guaranteed.
     */
    HeartbeatTick: S.integer
  }),
  /** Dispatcher configuration. */
  Dispatcher: S.struct({
    /** The delay for an agent to send a heartbeat to the dispatcher.
     */
    HeartbeatPeriod: S.integer
  }),
  /** CA configuration. */
  CAConfig: S.struct({
    /** The desired signing CA certificate for all swarm node TLS leaf
    certificates, in PEM format.
     */
    SigningCACert: S.string,
    /** The desired signing CA key for all swarm node TLS leaf certificates,
    in PEM format.
     */
    SigningCAKey: S.string,
    /** The duration node certificates are issued for. */
    NodeCertExpiry: S.integer,
    /** Configuration for forwarding signing requests to an external
    certificate authority.
     */
    ExternalCAs: S.array(S.struct({
      /** URL where certificate signing requests should be sent.
       */
      URL: S.string,
      /** The root CA certificate (in PEM format) this external CA uses
      to issue TLS certificates (assumed to be to the current swarm
      root CA certificate if not provided).
       */
      CACert: S.string,
      /** Protocol for communication with the external CA (currently
      only `cfssl` is supported).
       */
      Protocol: S.enums(undefined),
      /** An object with key/value pairs that are interpreted as
      protocol-specific options for the external CA driver.
       */
      Options: S.struct({
      
      })
    })),
    /** An integer whose purpose is to force swarm to generate a new
    signing CA certificate and key, if none have been specified in
    `SigningCACert` and `SigningCAKey`
     */
    ForceRotate: S.integer
  }),
  /** Parameters related to encryption-at-rest. */
  EncryptionConfig: S.struct({
    /** If set, generate a key and use it to lock data stored on the
    managers.
     */
    AutoLockManagers: S.boolean
  }),
  /** Defaults for creating tasks in this cluster. */
  TaskDefaults: S.struct({
    /** The log driver to use for tasks created in the orchestrator if
    unspecified by a service.
    
    Updating this value only affects new tasks. Existing tasks continue
    to use their previously configured log driver until recreated.
     */
    LogDriver: S.struct({
      /** The log driver to use as a default for new tasks.
       */
      Name: S.string,
      /** Driver-specific options for the selectd log driver, specified
      as key/value pairs.
       */
      Options: S.struct({
      
      })
    })
  })
})

export const ClusterInfo = S.struct({
  /** Whether there is currently a root CA rotation in progress for the swarm
   */
  RootRotationInProgress: S.boolean,
  /** The ID of the swarm. */
  ID: S.string,
  /** Date and time at which the swarm was initialised in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  CreatedAt: S.string,
  /** Date and time at which the swarm was last updated in
  [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
   */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => SwarmSpec),
  /** undefined */
  TLSInfo: S.suspend(() => TLSInfo),
  /** DataPathPort specifies the data path port number for data traffic.
  Acceptable port range is 1024 to 49151.
  If no port is set or is set to 0, the default port (4789) is used.
   */
  DataPathPort: S.integer,
  /** Default Address Pool specifies default subnet pools for global scope
  networks.
   */
  DefaultAddrPool: S.array(S.string),
  /** SubnetSize specifies the subnet size of the networks created from the
  default subnet pool.
   */
  SubnetSize: S.unknown
})

export const JoinTokens = S.struct({
  /** The token workers can use to join the swarm.
   */
  Worker: S.string,
  /** The token managers can use to join the swarm.
   */
  Manager: S.string
})

export const Swarm = S.struct({

})

export const NetworkAttachmentConfig = S.struct({
  /** The target network for attachment. Must be a network name or ID.
   */
  Target: S.string,
  /** Discoverable alternate names for the service on this network.
   */
  Aliases: S.array(S.string),
  /** Driver attachment options for the network target.
   */
  DriverOpts: S.struct({
  
  })
})

export const TaskSpec = S.struct({
  /** Runtime is the type of runtime specified for the task executor.
   */
  Runtime: S.string,
  /** Plugin spec for the service.  *(Experimental release only.)*
  
  <p><br /></p>
  
  > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
  > mutually exclusive. PluginSpec is only used when the Runtime field
  > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
  > field is set to `attachment`.
   */
  PluginSpec: S.struct({
    /** Disable the plugin once scheduled. */
    Disabled: S.boolean,
    /** The name or 'alias' to use for the plugin. */
    Name: S.string,
    /** The plugin image reference to use. */
    Remote: S.string,
    /** undefined */
    PluginPrivilege: S.array(S.suspend(() => PluginPrivilege))
  }),
  /** Container spec for the service.
  
  <p><br /></p>
  
  > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
  > mutually exclusive. PluginSpec is only used when the Runtime field
  > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
  > field is set to `attachment`.
   */
  ContainerSpec: S.struct({
    /** Whether a pseudo-TTY should be allocated. */
    TTY: S.boolean,
    /** Open `stdin` */
    OpenStdin: S.boolean,
    /** Mount the container's root filesystem as read only. */
    ReadOnly: S.boolean,
    /** Run an init inside the container that forwards signals and reaps
    processes. This field is omitted if empty, and the default (as
    configured on the daemon) is used.
     */
    Init: S.boolean,
    /** The image name to use for the container */
    Image: S.string,
    /** The hostname to use for the container, as a valid
    [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname.
     */
    Hostname: S.string,
    /** The working directory for commands to run in. */
    Dir: S.string,
    /** The user inside the container. */
    User: S.string,
    /** Signal to stop the container. */
    StopSignal: S.string,
    /** User-defined key/value data. */
    Labels: S.struct({
    
    }),
    /** The command to be run in the image. */
    Command: S.array(S.string),
    /** Arguments to the command. */
    Args: S.array(S.string),
    /** A list of environment variables in the form `VAR=value`.
     */
    Env: S.array(S.string),
    /** A list of additional groups that the container process will run as.
     */
    Groups: S.array(S.string),
    /** Security options for the container */
    Privileges: S.struct({
      /** Configuration of the no_new_privs bit in the container */
      NoNewPrivileges: S.boolean,
      /** CredentialSpec for managed service account (Windows only) */
      CredentialSpec: S.struct({
        /** Load credential spec from a Swarm Config with the given ID.
        The specified config must also be present in the Configs
        field with the Runtime property set.
        
        <p><br /></p>
        
        
        > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
        > and `CredentialSpec.Config` are mutually exclusive.
         */
        Config: S.string,
        /** Load credential spec from this file. The file is read by
        the daemon, and must be present in the `CredentialSpecs`
        subdirectory in the docker data directory, which defaults
        to `C:\ProgramData\Docker\` on Windows.
        
        For example, specifying `spec.json` loads
        `C:\ProgramData\Docker\CredentialSpecs\spec.json`.
        
        <p><br /></p>
        
        > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
        > and `CredentialSpec.Config` are mutually exclusive.
         */
        File: S.string,
        /** Load credential spec from this value in the Windows
        registry. The specified registry value must be located in:
        
        `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Containers\CredentialSpecs`
        
        <p><br /></p>
        
        
        > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
        > and `CredentialSpec.Config` are mutually exclusive.
         */
        Registry: S.string
      }),
      /** SELinux labels of the container */
      SELinuxContext: S.struct({
        /** Disable SELinux */
        Disable: S.boolean,
        /** SELinux user label */
        User: S.string,
        /** SELinux role label */
        Role: S.string,
        /** SELinux type label */
        Type: S.string,
        /** SELinux level label */
        Level: S.string
      }),
      /** Options for configuring seccomp on the container */
      Seccomp: S.struct({
        /** The custom seccomp profile as a json object */
        Profile: S.string,
        /** undefined */
        Mode: S.enums(undefined)
      }),
      /** Options for configuring AppArmor on the container */
      AppArmor: S.struct({
        /** undefined */
        Mode: S.enums(undefined)
      })
    }),
    /** Specification for mounts to be added to containers created as part
    of the service.
     */
    Mounts: S.array(S.suspend(() => Mount)),
    /** Amount of time to wait for the container to terminate before
    forcefully killing it.
     */
    StopGracePeriod: S.integer,
    /** undefined */
    HealthCheck: S.suspend(() => HealthConfig),
    /** A list of hostname/IP mappings to add to the container's `hosts`
    file. The format of extra hosts is specified in the
    [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)
    man page:
    
        IP_address canonical_hostname [aliases...]
     */
    Hosts: S.array(S.string),
    /** Specification for DNS related configurations in resolver configuration
    file (`resolv.conf`).
     */
    DNSConfig: S.struct({
      /** The IP addresses of the name servers. */
      Nameservers: S.array(S.string),
      /** A search list for host-name lookup. */
      Search: S.array(S.string),
      /** A list of internal resolver variables to be modified (e.g.,
      `debug`, `ndots:3`, etc.).
       */
      Options: S.array(S.string)
    }),
    /** Secrets contains references to zero or more secrets that will be
    exposed to the service.
     */
    Secrets: S.array(S.struct({
      /** SecretID represents the ID of the specific secret that we're
      referencing.
       */
      SecretID: S.string,
      /** SecretName is the name of the secret that this references,
      but this is just provided for lookup/display purposes. The
      secret in the reference will be identified by its ID.
       */
      SecretName: S.string,
      /** File represents a specific target that is backed by a file.
       */
      File: S.struct({
        /** Name represents the final filename in the filesystem.
         */
        Name: S.string,
        /** UID represents the file UID. */
        UID: S.string,
        /** GID represents the file GID. */
        GID: S.string,
        /** Mode represents the FileMode of the file. */
        Mode: S.integer
      })
    })),
    /** Configs contains references to zero or more configs that will be
    exposed to the service.
     */
    Configs: S.array(S.struct({
      /** ConfigID represents the ID of the specific config that we're
      referencing.
       */
      ConfigID: S.string,
      /** ConfigName is the name of the config that this references,
      but this is just provided for lookup/display purposes. The
      config in the reference will be identified by its ID.
       */
      ConfigName: S.string,
      /** File represents a specific target that is backed by a file.
      
      <p><br /><p>
      
      > **Note**: `Configs.File` and `Configs.Runtime` are mutually exclusive
       */
      File: S.struct({
        /** Name represents the final filename in the filesystem.
         */
        Name: S.string,
        /** UID represents the file UID. */
        UID: S.string,
        /** GID represents the file GID. */
        GID: S.string,
        /** Mode represents the FileMode of the file. */
        Mode: S.integer
      }),
      /** Runtime represents a target that is not mounted into the
      container but is used by the task
      
      <p><br /><p>
      
      > **Note**: `Configs.File` and `Configs.Runtime` are mutually
      > exclusive
       */
      Runtime: S.struct({
      
      })
    })),
    /** Isolation technology of the containers running the service.
    (Windows only)
     */
    Isolation: S.enums(undefined),
    /** Set kernel namedspaced parameters (sysctls) in the container.
    The Sysctls option on services accepts the same sysctls as the
    are supported on containers. Note that while the same sysctls are
    supported, no guarantees or checks are made about their
    suitability for a clustered environment, and it's up to the user
    to determine whether a given sysctl will work properly in a
    Service.
     */
    Sysctls: S.struct({
    
    }),
    /** A list of kernel capabilities to add to the default set
    for the container.
     */
    CapabilityAdd: S.array(S.string),
    /** A list of kernel capabilities to drop from the default set
    for the container.
     */
    CapabilityDrop: S.array(S.string),
    /** A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
     */
    Ulimits: S.array(S.struct({
      /** Name of ulimit */
      Name: S.string,
      /** Soft limit */
      Soft: S.integer,
      /** Hard limit */
      Hard: S.integer
    }))
  }),
  /** Read-only spec type for non-swarm containers attached to swarm overlay
  networks.
  
  <p><br /></p>
  
  > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
  > mutually exclusive. PluginSpec is only used when the Runtime field
  > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
  > field is set to `attachment`.
   */
  NetworkAttachmentSpec: S.struct({
    /** ID of the container represented by this task */
    ContainerID: S.string
  }),
  /** Resource requirements which apply to each individual container created
  as part of the service.
   */
  Resources: S.struct({
    /** Define resources limits. */
    Limits: S.suspend(() => Limit),
    /** Define resources reservation. */
    Reservations: S.suspend(() => ResourceObject)
  }),
  /** Specification for the restart policy which applies to containers
  created as part of this service.
   */
  RestartPolicy: S.struct({
    /** Condition for restart. */
    Condition: S.enums(undefined),
    /** Delay between restart attempts. */
    Delay: S.integer,
    /** Maximum attempts to restart a given container before giving up
    (default value is 0, which is ignored).
     */
    MaxAttempts: S.integer,
    /** Windows is the time window used to evaluate the restart policy
    (default value is 0, which is unbounded).
     */
    Window: S.integer
  }),
  /** undefined */
  Placement: S.struct({
    /** An array of constraint expressions to limit the set of nodes where
    a task can be scheduled. Constraint expressions can either use a
    _match_ (`==`) or _exclude_ (`!=`) rule. Multiple constraints find
    nodes that satisfy every expression (AND match). Constraints can
    match node or Docker Engine labels as follows:
    
    node attribute       | matches                        | example
    ---------------------|--------------------------------|-----------------------------------------------
    `node.id`            | Node ID                        | `node.id==2ivku8v2gvtg4`
    `node.hostname`      | Node hostname                  | `node.hostname!=node-2`
    `node.role`          | Node role (`manager`/`worker`) | `node.role==manager`
    `node.platform.os`   | Node operating system          | `node.platform.os==windows`
    `node.platform.arch` | Node architecture              | `node.platform.arch==x86_64`
    `node.labels`        | User-defined node labels       | `node.labels.security==high`
    `engine.labels`      | Docker Engine's labels         | `engine.labels.operatingsystem==ubuntu-14.04`
    
    `engine.labels` apply to Docker Engine labels like operating system,
    drivers, etc. Swarm administrators add `node.labels` for operational
    purposes by using the [`node update endpoint`](#operation/NodeUpdate).
     */
    Constraints: S.array(S.string),
    /** Preferences provide a way to make the scheduler aware of factors
    such as topology. They are provided in order from highest to
    lowest precedence.
     */
    Preferences: S.array(S.struct({
      /** undefined */
      Spread: S.struct({
        /** label descriptor, such as `engine.labels.az`.
         */
        SpreadDescriptor: S.string
      })
    })),
    /** Maximum number of replicas for per node (default value is 0, which
    is unlimited)
     */
    MaxReplicas: S.integer,
    /** Platforms stores all the platforms that the service's image can
    run on. This field is used in the platform filter for scheduling.
    If empty, then the platform filter is off, meaning there are no
    scheduling restrictions.
     */
    Platforms: S.array(S.suspend(() => Platform))
  }),
  /** A counter that triggers an update even if no relevant parameters have
  been changed.
   */
  ForceUpdate: S.integer,
  /** Specifies which networks the service should attach to. */
  Networks: S.array(S.suspend(() => NetworkAttachmentConfig)),
  /** Specifies the log driver to use for tasks created from this spec. If
  not present, the default one for the swarm will be used, finally
  falling back to the engine default if not specified.
   */
  LogDriver: S.struct({
    /** a string */
    Name: S.string,
    /** undefined */
    Options: S.struct({
    
    })
  })
})

export const TaskState = S.enums(undefined)

export const ContainerStatus = S.struct({
  /** a string */
  ContainerID: S.string,
  /** an integer */
  PID: S.integer,
  /** an integer */
  ExitCode: S.integer
})

export const EndpointPortConfig = S.struct({
  /** a string */
  Name: S.string,
  /** undefined */
  Protocol: S.enums(undefined),
  /** The port inside the container. */
  TargetPort: S.integer,
  /** The port on the swarm hosts. */
  PublishedPort: S.integer,
  /** The mode in which port is published.
  
  <p><br /></p>
  
  - "ingress" makes the target port accessible on every node,
    regardless of whether there is a task for the service running on
    that node or not.
  - "host" bypasses the routing mesh and publish the port directly on
    the swarm node where that service is running.
   */
  PublishMode: S.enums(undefined)
})

export const PortStatus = S.struct({
  /** undefined */
  Ports: S.array(S.suspend(() => EndpointPortConfig))
})

export const TaskStatus = S.struct({
  /** a string */
  Timestamp: S.string,
  /** a string */
  Message: S.string,
  /** a string */
  Err: S.string,
  /** undefined */
  State: S.suspend(() => TaskState),
  /** undefined */
  ContainerStatus: S.suspend(() => ContainerStatus),
  /** undefined */
  PortStatus: S.suspend(() => PortStatus)
})

export const Task = S.struct({
  /** The ID of the task. */
  ID: S.string,
  /** a string */
  CreatedAt: S.string,
  /** a string */
  UpdatedAt: S.string,
  /** Name of the task. */
  Name: S.string,
  /** The ID of the service this task is part of. */
  ServiceID: S.string,
  /** The ID of the node that this task is on. */
  NodeID: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** undefined */
  Spec: S.suspend(() => TaskSpec),
  /** an integer */
  Slot: S.integer,
  /** undefined */
  AssignedGenericResources: S.suspend(() => GenericResources),
  /** undefined */
  Status: S.suspend(() => TaskStatus),
  /** undefined */
  DesiredState: S.suspend(() => TaskState),
  /** If the Service this Task belongs to is a job-mode service, contains
  the JobIteration of the Service this Task was created for. Absent if
  the Task was created for a Replicated or Global Service.
   */
  JobIteration: S.suspend(() => ObjectVersion)
})

export const EndpointSpec = S.struct({
  /** The mode of resolution to use for internal load balancing between tasks.
   */
  Mode: S.enums(undefined),
  /** List of exposed ports that this service is accessible on from the
  outside. Ports can only be provided if `vip` resolution mode is used.
   */
  Ports: S.array(S.suspend(() => EndpointPortConfig))
})

export const ServiceSpec = S.struct({
  /** Name of the service. */
  Name: S.string,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** undefined */
  TaskTemplate: S.suspend(() => TaskSpec),
  /** Scheduling mode for the service. */
  Mode: S.struct({
    /** undefined */
    Replicated: S.struct({
      /** an integer */
      Replicas: S.integer
    }),
    /** undefined */
    Global: S.struct({
    
    }),
    /** The mode used for services with a finite number of tasks that run
    to a completed state.
     */
    ReplicatedJob: S.struct({
      /** The maximum number of replicas to run simultaneously.
       */
      MaxConcurrent: S.integer,
      /** The total number of replicas desired to reach the Completed
      state. If unset, will default to the value of `MaxConcurrent`
       */
      TotalCompletions: S.integer
    }),
    /** The mode used for services which run a task to the completed state
    on each valid node.
     */
    GlobalJob: S.struct({
    
    })
  }),
  /** Specification for the update strategy of the service. */
  UpdateConfig: S.struct({
    /** The fraction of tasks that may fail during an update before the
    failure action is invoked, specified as a floating point number
    between 0 and 1.
     */
    MaxFailureRatio: S.number,
    /** Maximum number of tasks to be updated in one iteration (0 means
    unlimited parallelism).
     */
    Parallelism: S.integer,
    /** Amount of time between updates, in nanoseconds. */
    Delay: S.integer,
    /** Action to take if an updated task fails to run, or stops running
    during the update.
     */
    FailureAction: S.enums(undefined),
    /** Amount of time to monitor each updated task for failures, in
    nanoseconds.
     */
    Monitor: S.integer,
    /** The order of operations when rolling out an updated task. Either
    the old task is shut down before the new task is started, or the
    new task is started before the old task is shut down.
     */
    Order: S.enums(undefined)
  }),
  /** Specification for the rollback strategy of the service. */
  RollbackConfig: S.struct({
    /** The fraction of tasks that may fail during a rollback before the
    failure action is invoked, specified as a floating point number
    between 0 and 1.
     */
    MaxFailureRatio: S.number,
    /** Maximum number of tasks to be rolled back in one iteration (0 means
    unlimited parallelism).
     */
    Parallelism: S.integer,
    /** Amount of time between rollback iterations, in nanoseconds.
     */
    Delay: S.integer,
    /** Action to take if an rolled back task fails to run, or stops
    running during the rollback.
     */
    FailureAction: S.enums(undefined),
    /** Amount of time to monitor each rolled back task for failures, in
    nanoseconds.
     */
    Monitor: S.integer,
    /** The order of operations when rolling back a task. Either the old
    task is shut down before the new task is started, or the new task
    is started before the old task is shut down.
     */
    Order: S.enums(undefined)
  }),
  /** Specifies which networks the service should attach to.
  
  Deprecated: This field is deprecated since v1.44. The Networks field in TaskSpec should be used instead.
   */
  Networks: S.array(S.suspend(() => NetworkAttachmentConfig)),
  /** undefined */
  EndpointSpec: S.suspend(() => EndpointSpec)
})

export const Service = S.struct({
  /** a string */
  ID: S.string,
  /** a string */
  CreatedAt: S.string,
  /** a string */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => ServiceSpec),
  /** undefined */
  Endpoint: S.struct({
    /** undefined */
    Spec: S.suspend(() => EndpointSpec),
    /** undefined */
    Ports: S.array(S.suspend(() => EndpointPortConfig)),
    /** undefined */
    VirtualIPs: S.array(S.struct({
      /** a string */
      NetworkID: S.string,
      /** a string */
      Addr: S.string
    }))
  }),
  /** The status of a service update. */
  UpdateStatus: S.struct({
    /** a string */
    StartedAt: S.string,
    /** a string */
    CompletedAt: S.string,
    /** a string */
    Message: S.string,
    /** undefined */
    State: S.enums(undefined)
  }),
  /** The status of the service's tasks. Provided only when requested as
  part of a ServiceList operation.
   */
  ServiceStatus: S.struct({
    /** The number of tasks for the service currently in the Running state.
     */
    RunningTasks: S.integer,
    /** The number of tasks for the service desired to be running.
    For replicated services, this is the replica count from the
    service spec. For global services, this is computed by taking
    count of all tasks for the service with a Desired State other
    than Shutdown.
     */
    DesiredTasks: S.integer,
    /** The number of tasks for a job that are in the Completed state.
    This field must be cross-referenced with the service type, as the
    value of 0 may mean the service is not in a job mode, or it may
    mean the job-mode service has no tasks yet Completed.
     */
    CompletedTasks: S.integer
  }),
  /** The status of the service when it is in one of ReplicatedJob or
  GlobalJob modes. Absent on Replicated and Global mode services. The
  JobIteration is an ObjectVersion, but unlike the Service's version,
  does not need to be sent with an update request.
   */
  JobStatus: S.struct({
    /** The last time, as observed by the server, that this job was
    started.
     */
    LastExecution: S.string,
    /** JobIteration is a value increased each time a Job is executed,
    successfully or otherwise. "Executed", in this case, means the
    job as a whole has been started, not that an individual Task has
    been launched. A job is "Executed" when its ServiceSpec is
    updated. JobIteration can be used to disambiguate Tasks belonging
    to different executions of a job.  Though JobIteration will
    increase with each subsequent execution, it may not necessarily
    increase by 1, and so JobIteration should not be used to
     */
    JobIteration: S.suspend(() => ObjectVersion)
  })
})

export const ImageDeleteResponseItem = S.struct({
  /** The image ID of an image that was untagged */
  Untagged: S.string,
  /** The image ID of an image that was deleted */
  Deleted: S.string
})

export const ServiceCreateResponse = S.struct({
  /** The ID of the created service. */
  ID: S.string,
  /** Optional warning message.
  
  FIXME(thaJeztah): this should have "omitempty" in the generated type.
   */
  Warnings: S.array(S.string)
})

export const ServiceUpdateResponse = S.struct({
  /** Optional warning messages */
  Warnings: S.array(S.string)
})

export const ContainerSummary = S.struct({
  /** The ID of this container */
  Id: S.string,
  /** The name of the image used when creating this container */
  Image: S.string,
  /** The ID of the image that this container was created from */
  ImageID: S.string,
  /** Command to run when starting the container */
  Command: S.string,
  /** The state of this container (e.g. `Exited`) */
  State: S.string,
  /** Additional human-readable status of this container (e.g. `Exit 0`) */
  Status: S.string,
  /** The names that this container has been given */
  Names: S.array(S.string),
  /** When the container was created */
  Created: S.integer,
  /** The ports exposed by this container */
  Ports: S.array(S.suspend(() => Port)),
  /** The size of files that have been created or changed by this container */
  SizeRw: S.integer,
  /** The total size of all the files in this container */
  SizeRootFs: S.integer,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** undefined */
  HostConfig: S.struct({
    /** a string */
    NetworkMode: S.string
  }),
  /** A summary of the container's network settings */
  NetworkSettings: S.struct({
    /** undefined */
    Networks: S.struct({
    
    })
  }),
  /** undefined */
  Mounts: S.array(S.suspend(() => MountPoint))
})

export const Driver = S.struct({
  /** Name of the driver. */
  Name: S.string,
  /** Key/value map of driver-specific options. */
  Options: S.struct({
  
  })
})

export const SecretSpec = S.struct({
  /** User-defined name of the secret. */
  Name: S.string,
  /** Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
  data to store as secret.
  
  This field is only used to _create_ a secret, and is not returned by
  other endpoints.
   */
  Data: S.string,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Name of the secrets driver used to fetch the secret's value from an
  external secret store.
   */
  Driver: S.suspend(() => Driver),
  /** Templating driver, if applicable
  
  Templating controls whether and how to evaluate the config payload as
  a template. If no driver is set, no templating is used.
   */
  Templating: S.suspend(() => Driver)
})

export const Secret = S.struct({
  /** a string */
  ID: S.string,
  /** a string */
  CreatedAt: S.string,
  /** a string */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => SecretSpec)
})

export const ConfigSpec = S.struct({
  /** User-defined name of the config. */
  Name: S.string,
  /** Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5))
  config data.
   */
  Data: S.string,
  /** User-defined key/value metadata. */
  Labels: S.struct({
  
  }),
  /** Templating driver, if applicable
  
  Templating controls whether and how to evaluate the config payload as
  a template. If no driver is set, no templating is used.
   */
  Templating: S.suspend(() => Driver)
})

export const Config = S.struct({
  /** a string */
  ID: S.string,
  /** a string */
  CreatedAt: S.string,
  /** a string */
  UpdatedAt: S.string,
  /** undefined */
  Version: S.suspend(() => ObjectVersion),
  /** undefined */
  Spec: S.suspend(() => ConfigSpec)
})

export const ContainerState = S.struct({
  /** Whether this container is running.
  
  Note that a running container can be _paused_. The `Running` and `Paused`
  booleans are not mutually exclusive:
  
  When pausing a container (on Linux), the freezer cgroup is used to suspend
  all processes in the container. Freezing the process requires the process to
  be running. As a result, paused containers are both `Running` _and_ `Paused`.
  
  Use the `Status` field instead to determine if a container's state is "running".
   */
  Running: S.boolean,
  /** Whether this container is paused. */
  Paused: S.boolean,
  /** Whether this container is restarting. */
  Restarting: S.boolean,
  /** Whether a process within this container has been killed because it ran
  out of memory since the container was last started.
   */
  OOMKilled: S.boolean,
  /** a boolean */
  Dead: S.boolean,
  /** a string */
  Error: S.string,
  /** The time when this container was last started. */
  StartedAt: S.string,
  /** The time when this container last exited. */
  FinishedAt: S.string,
  /** String representation of the container state. Can be one of "created",
  "running", "paused", "restarting", "removing", "exited", or "dead".
   */
  Status: S.enums(undefined),
  /** The process ID of this container */
  Pid: S.integer,
  /** The last exit code of this container */
  ExitCode: S.integer,
  /** undefined */
  Health: S.suspend(() => Health)
})

export const ContainerCreateResponse = S.struct({
  /** The ID of the created container */
  Id: S.string,
  /** Warnings encountered when creating the container */
  Warnings: S.array(S.string)
})

export const ContainerWaitExitError = S.struct({
  /** Details of an error */
  Message: S.string
})

export const ContainerWaitResponse = S.struct({
  /** Exit code of the container */
  StatusCode: S.integer,
  /** undefined */
  Error: S.suspend(() => ContainerWaitExitError)
})

export const SystemVersion = S.struct({
  /** Indicates if the daemon is started with experimental features enabled.
  
  This field is omitted when empty / false.
   */
  Experimental: S.boolean,
  /** The version of the daemon */
  Version: S.string,
  /** The default (and highest) API version that is supported by the daemon
   */
  ApiVersion: S.string,
  /** The minimum API version that is supported by the daemon
   */
  MinAPIVersion: S.string,
  /** The Git commit of the source code that was used to build the daemon
   */
  GitCommit: S.string,
  /** The version Go used to compile the daemon, and the version of the Go
  runtime in use.
   */
  GoVersion: S.string,
  /** The operating system that the daemon is running on ("linux" or "windows")
   */
  Os: S.string,
  /** The architecture that the daemon is running on
   */
  Arch: S.string,
  /** The kernel version (`uname -r`) that the daemon is running on.
  
  This field is omitted when empty.
   */
  KernelVersion: S.string,
  /** The date and time that the daemon was compiled.
   */
  BuildTime: S.string,
  /** undefined */
  Platform: S.struct({
    /** a string */
    Name: S.string
  }),
  /** Information about system components
   */
  Components: S.array(S.struct({
    /** Name of the component
     */
    Name: S.string,
    /** Version of the component
     */
    Version: S.string,
    /** Key/value pairs of strings with additional information about the
    component. These values are intended for informational purposes
    only, and their content is not defined, and not part of the API
    specification.
    
    These messages can be printed by the client as information to the user.
     */
    Details: S.struct({
    
    })
  }))
})

export const PluginsInfo = S.struct({
  /** Names of available volume-drivers, and network-driver plugins. */
  Volume: S.array(S.string),
  /** Names of available network-drivers, and network-driver plugins. */
  Network: S.array(S.string),
  /** Names of available authorization plugins. */
  Authorization: S.array(S.string),
  /** Names of available logging-drivers, and logging-driver plugins. */
  Log: S.array(S.string)
})

export const IndexInfo = S.struct({
  /** Indicates if the registry is part of the list of insecure
  registries.
  
  If `false`, the registry is insecure. Insecure registries accept
  un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from
  unknown CAs) communication.
  
  > **Warning**: Insecure registries can be useful when running a local
  > registry. However, because its use creates security vulnerabilities
  > it should ONLY be enabled for testing purposes. For increased
  > security, users should add their CA to their system's list of
  > trusted CAs instead of enabling this option.
   */
  Secure: S.boolean,
  /** Indicates whether this is an official registry (i.e., Docker Hub / docker.io)
   */
  Official: S.boolean,
  /** Name of the registry, such as "docker.io".
   */
  Name: S.string,
  /** List of mirrors, expressed as URIs.
   */
  Mirrors: S.array(S.string)
})

export const RegistryServiceConfig = S.struct({
  /** List of IP ranges to which nondistributable artifacts can be pushed,
  using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).
  
  Some images (for example, Windows base images) contain artifacts
  whose distribution is restricted by license. When these images are
  pushed to a registry, restricted artifacts are not included.
  
  This configuration override this behavior, and enables the daemon to
  push nondistributable artifacts to all registries whose resolved IP
  address is within the subnet described by the CIDR syntax.
  
  This option is useful when pushing images containing
  nondistributable artifacts to a registry on an air-gapped network so
  hosts on that network can pull the images without connecting to
  another server.
  
  > **Warning**: Nondistributable artifacts typically have restrictions
  > on how and where they can be distributed and shared. Only use this
  > feature to push artifacts to private registries and ensure that you
  > are in compliance with any terms that cover redistributing
  > nondistributable artifacts.
   */
  AllowNondistributableArtifactsCIDRs: S.array(S.string),
  /** List of registry hostnames to which nondistributable artifacts can be
  pushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.
  
  Some images (for example, Windows base images) contain artifacts
  whose distribution is restricted by license. When these images are
  pushed to a registry, restricted artifacts are not included.
  
  This configuration override this behavior for the specified
  registries.
  
  This option is useful when pushing images containing
  nondistributable artifacts to a registry on an air-gapped network so
  hosts on that network can pull the images without connecting to
  another server.
  
  > **Warning**: Nondistributable artifacts typically have restrictions
  > on how and where they can be distributed and shared. Only use this
  > feature to push artifacts to private registries and ensure that you
  > are in compliance with any terms that cover redistributing
  > nondistributable artifacts.
   */
  AllowNondistributableArtifactsHostnames: S.array(S.string),
  /** List of IP ranges of insecure registries, using the CIDR syntax
  ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries
  accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates
  from unknown CAs) communication.
  
  By default, local registries (`127.0.0.0/8`) are configured as
  insecure. All other registries are secure. Communicating with an
  insecure registry is not possible if the daemon assumes that registry
  is secure.
  
  This configuration override this behavior, insecure communication with
  registries whose resolved IP address is within the subnet described by
  the CIDR syntax.
  
  Registries can also be marked insecure by hostname. Those registries
  are listed under `IndexConfigs` and have their `Secure` field set to
  `false`.
  
  > **Warning**: Using this option can be useful when running a local
  > registry, but introduces security vulnerabilities. This option
  > should therefore ONLY be used for testing purposes. For increased
  > security, users should add their CA to their system's list of trusted
  > CAs instead of enabling this option.
   */
  InsecureRegistryCIDRs: S.array(S.string),
  /** undefined */
  IndexConfigs: S.struct({
  
  }),
  /** List of registry URLs that act as a mirror for the official
  (`docker.io`) registry.
   */
  Mirrors: S.array(S.string)
})

export const Runtime = S.struct({
  /** Name and, optional, path, of the OCI executable binary.
  
  If the path is omitted, the daemon searches the host's `$PATH` for the
  binary and uses the first result.
   */
  path: S.string,
  /** List of command-line arguments to pass to the runtime when invoked.
   */
  runtimeArgs: S.array(S.string),
  /** Information specific to the runtime.
  
  While this API specification does not define data provided by runtimes,
  the following well-known properties may be provided by runtimes:
  
  `org.opencontainers.runtime-spec.features`: features structure as defined
  in the [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/main/features.md),
  in a JSON string representation.
  
  <p><br /></p>
  
  > **Note**: The information returned in this field, including the
  > formatting of values and labels, should not be considered stable,
  > and may change without notice.
   */
  status: S.struct({
  
  })
})

export const LocalNodeState = S.enums(undefined)

export const PeerNode = S.struct({
  /** Unique identifier of for this node in the swarm. */
  NodeID: S.string,
  /** IP address and ports at which this node can be reached.
   */
  Addr: S.string
})

export const SwarmInfo = S.struct({
  /** a boolean */
  ControlAvailable: S.boolean,
  /** Unique identifier of for this node in the swarm. */
  NodeID: S.string,
  /** IP address at which this node can be reached by other nodes in the
  swarm.
   */
  NodeAddr: S.string,
  /** a string */
  Error: S.string,
  /** undefined */
  LocalNodeState: S.suspend(() => LocalNodeState),
  /** List of ID's and addresses of other managers in the swarm.
   */
  RemoteManagers: S.array(S.suspend(() => PeerNode)),
  /** Total number of nodes in the swarm. */
  Nodes: S.integer,
  /** Total number of managers in the swarm. */
  Managers: S.integer,
  /** undefined */
  Cluster: S.suspend(() => ClusterInfo)
})

export const Commit = S.struct({
  /** Actual commit ID of external tool. */
  ID: S.string,
  /** Commit ID of external tool expected by dockerd as set at build time.
   */
  Expected: S.string
})

export const SystemInfo = S.struct({
  /** Indicates if the host has memory limit support enabled. */
  MemoryLimit: S.boolean,
  /** Indicates if the host has memory swap limit support enabled. */
  SwapLimit: S.boolean,
  /** Indicates if the host has kernel memory TCP limit support enabled. This
  field is omitted if not supported.
  
  Kernel memory TCP limits are not supported when using cgroups v2, which
  does not support the corresponding `memory.kmem.tcp.limit_in_bytes` cgroup.
   */
  KernelMemoryTCP: S.boolean,
  /** Indicates if CPU CFS(Completely Fair Scheduler) period is supported by
  the host.
   */
  CpuCfsPeriod: S.boolean,
  /** Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by
  the host.
   */
  CpuCfsQuota: S.boolean,
  /** Indicates if CPU Shares limiting is supported by the host.
   */
  CPUShares: S.boolean,
  /** Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.
  
  See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)
   */
  CPUSet: S.boolean,
  /** Indicates if the host kernel has PID limit support enabled. */
  PidsLimit: S.boolean,
  /** Indicates if OOM killer disable is supported on the host. */
  OomKillDisable: S.boolean,
  /** Indicates IPv4 forwarding is enabled. */
  IPv4Forwarding: S.boolean,
  /** Indicates if `bridge-nf-call-iptables` is available on the host. */
  BridgeNfIptables: S.boolean,
  /** Indicates if `bridge-nf-call-ip6tables` is available on the host. */
  BridgeNfIp6tables: S.boolean,
  /** Indicates if the daemon is running in debug-mode / with debug-level
  logging enabled.
   */
  Debug: S.boolean,
  /** Indicates if experimental features are enabled on the daemon.
   */
  ExperimentalBuild: S.boolean,
  /** Indicates if live restore is enabled.
  
  If enabled, containers are kept running when the daemon is shutdown
  or upon daemon start if running containers are detected.
   */
  LiveRestoreEnabled: S.boolean,
  /** Unique identifier of the daemon.
  
  <p><br /></p>
  
  > **Note**: The format of the ID itself is not part of the API, and
  > should not be considered stable.
   */
  ID: S.string,
  /** Name of the storage driver in use. */
  Driver: S.string,
  /** Root directory of persistent Docker state.
  
  Defaults to `/var/lib/docker` on Linux, and `C:\ProgramData\docker`
  on Windows.
   */
  DockerRootDir: S.string,
  /** Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
  format with nano-seconds.
   */
  SystemTime: S.string,
  /** The logging driver to use as a default for new containers.
   */
  LoggingDriver: S.string,
  /** Kernel version of the host.
  
  On Linux, this information obtained from `uname`. On Windows this
  information is queried from the <kbd>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\</kbd>
  registry value, for example _"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)"_.
   */
  KernelVersion: S.string,
  /** Name of the host's operating system, for example: "Ubuntu 16.04.2 LTS"
  or "Windows Server 2016 Datacenter"
   */
  OperatingSystem: S.string,
  /** Version of the host's operating system
  
  <p><br /></p>
  
  > **Note**: The information returned in this field, including its
  > very existence, and the formatting of values, should not be considered
  > stable, and may change without notice.
   */
  OSVersion: S.string,
  /** Generic type of the operating system of the host, as returned by the
  Go runtime (`GOOS`).
  
  Currently returned values are "linux" and "windows". A full list of
  possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
   */
  OSType: S.string,
  /** Hardware architecture of the host, as returned by the Go runtime
  (`GOARCH`).
  
  A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
   */
  Architecture: S.string,
  /** Address / URL of the index server that is used for image search,
  and as a default for user authentication for Docker Hub and Docker Cloud.
   */
  IndexServerAddress: S.string,
  /** HTTP-proxy configured for the daemon. This value is obtained from the
  [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
  Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
  are masked in the API response.
  
  Containers do not automatically inherit this configuration.
   */
  HttpProxy: S.string,
  /** HTTPS-proxy configured for the daemon. This value is obtained from the
  [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
  Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
  are masked in the API response.
  
  Containers do not automatically inherit this configuration.
   */
  HttpsProxy: S.string,
  /** Comma-separated list of domain extensions for which no proxy should be
  used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)
  environment variable.
  
  Containers do not automatically inherit this configuration.
   */
  NoProxy: S.string,
  /** Hostname of the host. */
  Name: S.string,
  /** Version string of the daemon.
   */
  ServerVersion: S.string,
  /** Name of the default OCI runtime that is used when starting containers.
  
  The default can be overridden per-container at create time.
   */
  DefaultRuntime: S.string,
  /** Name and, optional, path of the `docker-init` binary.
  
  If the path is omitted, the daemon searches the host's `$PATH` for the
  binary and uses the first result.
   */
  InitBinary: S.string,
  /** Reports a summary of the product license on the daemon.
  
  If a commercial license has been applied to the daemon, information
  such as number of nodes, and expiration are included.
   */
  ProductLicense: S.string,
  /** Total number of containers on the host. */
  Containers: S.integer,
  /** Number of containers with status `"running"`.
   */
  ContainersRunning: S.integer,
  /** Number of containers with status `"paused"`.
   */
  ContainersPaused: S.integer,
  /** Number of containers with status `"stopped"`.
   */
  ContainersStopped: S.integer,
  /** Total number of images on the host.
  
  Both _tagged_ and _untagged_ (dangling) images are counted.
   */
  Images: S.integer,
  /** Information specific to the storage driver, provided as
  "label" / "value" pairs.
  
  This information is provided by the storage driver, and formatted
  in a way consistent with the output of `docker info` on the command
  line.
  
  <p><br /></p>
  
  > **Note**: The information returned in this field, including the
  > formatting of values and labels, should not be considered stable,
  > and may change without notice.
   */
  DriverStatus: S.array(S.array(S.string)),
  /** undefined */
  Plugins: S.suspend(() => PluginsInfo),
  /** The total number of file Descriptors in use by the daemon process.
  
  This information is only returned if debug-mode is enabled.
   */
  NFd: S.integer,
  /** The  number of goroutines that currently exist.
  
  This information is only returned if debug-mode is enabled.
   */
  NGoroutines: S.integer,
  /** The driver to use for managing cgroups.
   */
  CgroupDriver: S.enums(undefined),
  /** The version of the cgroup.
   */
  CgroupVersion: S.enums(undefined),
  /** Number of event listeners subscribed. */
  NEventsListener: S.integer,
  /** The number of logical CPUs usable by the daemon.
  
  The number of available CPUs is checked by querying the operating
  system when the daemon starts. Changes to operating system CPU
  allocation after the daemon is started are not reflected.
   */
  NCPU: S.integer,
  /** Total amount of physical memory available on the host, in bytes.
   */
  MemTotal: S.integer,
  /** undefined */
  RegistryConfig: S.suspend(() => RegistryServiceConfig),
  /** undefined */
  GenericResources: S.suspend(() => GenericResources),
  /** User-defined labels (key/value metadata) as set on the daemon.
  
  <p><br /></p>
  
  > **Note**: When part of a Swarm, nodes can both have _daemon_ labels,
  > set through the daemon configuration, and _node_ labels, set from a
  > manager node in the Swarm. Node labels are not included in this
  > field. Node labels can be retrieved using the `/nodes/(id)` endpoint
  > on a manager node in the Swarm.
   */
  Labels: S.array(S.string),
  /** List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
  runtimes configured on the daemon. Keys hold the "name" used to
  reference the runtime.
  
  The Docker daemon relies on an OCI compliant runtime (invoked via the
  `containerd` daemon) as its interface to the Linux kernel namespaces,
  cgroups, and SELinux.
  
  The default runtime is `runc`, and automatically configured. Additional
  runtimes can be configured by the user and will be listed here.
   */
  Runtimes: S.struct({
  
  }),
  /** undefined */
  Swarm: S.suspend(() => SwarmInfo),
  /** Represents the isolation technology to use as a default for containers.
  The supported values are platform-specific.
  
  If no isolation value is specified on daemon start, on Windows client,
  the default is `hyperv`, and on Windows server, the default is `process`.
  
  This option is currently not used on other platforms.
   */
  Isolation: S.enums(undefined),
  /** undefined */
  ContainerdCommit: S.suspend(() => Commit),
  /** undefined */
  RuncCommit: S.suspend(() => Commit),
  /** undefined */
  InitCommit: S.suspend(() => Commit),
  /** List of security features that are enabled on the daemon, such as
  apparmor, seccomp, SELinux, user-namespaces (userns), rootless and
  no-new-privileges.
  
  Additional configuration options for each security feature may
  be present, and are included as a comma-separated list of key/value
  pairs.
   */
  SecurityOptions: S.array(S.string),
  /** List of custom default address pools for local networks, which can be
  specified in the daemon.json file or dockerd option.
  
  Example: a Base "10.10.0.0/16" with Size 24 will define the set of 256
  10.10.[0-255].0/24 address pools.
   */
  DefaultAddressPools: S.array(S.struct({
    /** The network address in CIDR format */
    Base: S.string,
    /** The network pool size */
    Size: S.integer
  })),
  /** List of warnings / informational messages about missing features, or
  issues related to the daemon configuration.
  
  These messages can be printed by the client as information to the user.
   */
  Warnings: S.array(S.string),
  /** List of directories where (Container Device Interface) CDI
  specifications are located.
  
  These specifications define vendor-specific modifications to an OCI
  runtime specification for a container being created.
  
  An empty list indicates that CDI device injection is disabled.
  
  Note that since using CDI device injection requires the daemon to have
  experimental enabled. For non-experimental daemons an empty list will
  always be returned.
   */
  CDISpecDirs: S.array(S.string)
})

export const EventActor = S.struct({
  /** The ID of the object emitting the event */
  ID: S.string,
  /** Various key/value attributes of the object, depending on its type.
   */
  Attributes: S.struct({
  
  })
})

export const EventMessage = S.struct({
  /** The type of event */
  Action: S.string,
  /** The type of object emitting the event */
  Type: S.enums(undefined),
  /** undefined */
  Actor: S.suspend(() => EventActor),
  /** Scope of the event. Engine events are `local` scope. Cluster (Swarm)
  events are `swarm` scope.
   */
  scope: S.enums(undefined),
  /** Timestamp of event */
  time: S.integer,
  /** Timestamp of event, with nanosecond accuracy */
  timeNano: S.integer
})

export const OCIDescriptor = S.struct({
  /** The media type of the object this schema refers to.
   */
  mediaType: S.string,
  /** The digest of the targeted content.
   */
  digest: S.string,
  /** The size in bytes of the blob.
   */
  size: S.integer
})

export const OCIPlatform = S.struct({
  /** The CPU architecture, for example `amd64` or `ppc64`.
   */
  architecture: S.string,
  /** The operating system, for example `linux` or `windows`.
   */
  os: S.string,
  /** Optional field specifying the operating system version, for example on
  Windows `10.0.19041.1165`.
   */
  "os.version": S.string,
  /** Optional field specifying a variant of the CPU, for example `v7` to
  specify ARMv7 when architecture is `arm`.
   */
  variant: S.string,
  /** Optional field specifying an array of strings, each listing a required
  OS feature (for example on Windows `win32k`).
   */
  "os.features": S.array(S.string)
})

export const DistributionInspect = S.struct({
  /** undefined */
  Descriptor: S.suspend(() => OCIDescriptor),
  /** An array containing all platforms supported by the image.
   */
  Platforms: S.array(S.suspend(() => OCIPlatform))
})